import axios from 'axios';
import queryString from 'query-string';
import { WhiteboardInterface, WhiteboardGetQueryInterface } from 'interfaces/whiteboard';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWhiteboards = async (
  query?: WhiteboardGetQueryInterface,
): Promise<PaginatedInterface<WhiteboardInterface>> => {
  const response = await axios.get('/api/whiteboards', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWhiteboard = async (whiteboard: WhiteboardInterface) => {
  const response = await axios.post('/api/whiteboards', whiteboard);
  return response.data;
};

export const updateWhiteboardById = async (id: string, whiteboard: WhiteboardInterface) => {
  const response = await axios.put(`/api/whiteboards/${id}`, whiteboard);
  return response.data;
};

export const getWhiteboardById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/whiteboards/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWhiteboardById = async (id: string) => {
  const response = await axios.delete(`/api/whiteboards/${id}`);
  return response.data;
};
