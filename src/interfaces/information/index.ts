import { SectionInterface } from 'interfaces/section';
import { GetQueryInterface } from 'interfaces';

export interface InformationInterface {
  id?: string;
  title: string;
  content?: string;
  section_id: string;
  type: string;
  created_at?: any;
  updated_at?: any;

  section?: SectionInterface;
  _count?: {};
}

export interface InformationGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  section_id?: string;
  type?: string;
}
