import { InvitationInterface } from 'interfaces/invitation';
import { SectionInterface } from 'interfaces/section';
import { WhiteboardInterface } from 'interfaces/whiteboard';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WorkspaceInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  section?: SectionInterface[];
  whiteboard?: WhiteboardInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    section?: number;
    whiteboard?: number;
  };
}

export interface WorkspaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
