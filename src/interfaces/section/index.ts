import { InformationInterface } from 'interfaces/information';
import { WorkspaceInterface } from 'interfaces/workspace';
import { GetQueryInterface } from 'interfaces';

export interface SectionInterface {
  id?: string;
  name: string;
  workspace_id: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  information?: InformationInterface[];
  workspace?: WorkspaceInterface;
  _count?: {
    information?: number;
  };
}

export interface SectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  workspace_id?: string;
  description?: string;
}
