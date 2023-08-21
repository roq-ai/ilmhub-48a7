import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { workspaceValidationSchema } from 'validationSchema/workspaces';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getWorkspaces();
    case 'POST':
      return createWorkspace();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWorkspaces() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.workspace
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'workspace'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createWorkspace() {
    await workspaceValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.invitation?.length > 0) {
      const create_invitation = body.invitation;
      body.invitation = {
        create: create_invitation,
      };
    } else {
      delete body.invitation;
    }
    if (body?.section?.length > 0) {
      const create_section = body.section;
      body.section = {
        create: create_section,
      };
    } else {
      delete body.section;
    }
    if (body?.whiteboard?.length > 0) {
      const create_whiteboard = body.whiteboard;
      body.whiteboard = {
        create: create_whiteboard,
      };
    } else {
      delete body.whiteboard;
    }
    const data = await prisma.workspace.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
