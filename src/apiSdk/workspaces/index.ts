import axios from 'axios';
import queryString from 'query-string';
import { WorkspaceInterface, WorkspaceGetQueryInterface } from 'interfaces/workspace';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWorkspaces = async (
  query?: WorkspaceGetQueryInterface,
): Promise<PaginatedInterface<WorkspaceInterface>> => {
  const response = await axios.get('/api/workspaces', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWorkspace = async (workspace: WorkspaceInterface) => {
  const response = await axios.post('/api/workspaces', workspace);
  return response.data;
};

export const updateWorkspaceById = async (id: string, workspace: WorkspaceInterface) => {
  const response = await axios.put(`/api/workspaces/${id}`, workspace);
  return response.data;
};

export const getWorkspaceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/workspaces/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWorkspaceById = async (id: string) => {
  const response = await axios.delete(`/api/workspaces/${id}`);
  return response.data;
};
