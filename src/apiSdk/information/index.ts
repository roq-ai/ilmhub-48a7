import axios from 'axios';
import queryString from 'query-string';
import { InformationInterface, InformationGetQueryInterface } from 'interfaces/information';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInformation = async (
  query?: InformationGetQueryInterface,
): Promise<PaginatedInterface<InformationInterface>> => {
  const response = await axios.get('/api/information', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInformation = async (information: InformationInterface) => {
  const response = await axios.post('/api/information', information);
  return response.data;
};

export const updateInformationById = async (id: string, information: InformationInterface) => {
  const response = await axios.put(`/api/information/${id}`, information);
  return response.data;
};

export const getInformationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/information/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInformationById = async (id: string) => {
  const response = await axios.delete(`/api/information/${id}`);
  return response.data;
};
