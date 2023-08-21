import { WorkspaceInterface } from 'interfaces/workspace';
import { GetQueryInterface } from 'interfaces';

export interface WhiteboardInterface {
  id?: string;
  workspace_id: string;
  content?: string;
  name: string;
  created_at?: any;
  updated_at?: any;

  workspace?: WorkspaceInterface;
  _count?: {};
}

export interface WhiteboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  workspace_id?: string;
  content?: string;
  name?: string;
}
