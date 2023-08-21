import { WorkspaceInterface } from 'interfaces/workspace';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  workspace_id: string;
  user_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  workspace?: WorkspaceInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  workspace_id?: string;
  user_id?: string;
  status?: string;
}
