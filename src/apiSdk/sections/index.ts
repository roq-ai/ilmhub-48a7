import axios from 'axios';
import queryString from 'query-string';
import { SectionInterface, SectionGetQueryInterface } from 'interfaces/section';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSections = async (query?: SectionGetQueryInterface): Promise<PaginatedInterface<SectionInterface>> => {
  const response = await axios.get('/api/sections', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSection = async (section: SectionInterface) => {
  const response = await axios.post('/api/sections', section);
  return response.data;
};

export const updateSectionById = async (id: string, section: SectionInterface) => {
  const response = await axios.put(`/api/sections/${id}`, section);
  return response.data;
};

export const getSectionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sections/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSectionById = async (id: string) => {
  const response = await axios.delete(`/api/sections/${id}`);
  return response.data;
};
