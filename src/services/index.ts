import { get } from '../http';
import { AxiosResponse } from 'axios';
import { IFoundRepositoryData } from '../interfaces';

export const getFoundRepositories = (
  desiredRepository: string,
  page: number,
  countOfRepositories: number,
): Promise<AxiosResponse<IFoundRepositoryData>> =>
  get(`/search/repositories`, {
    params: {
      q: desiredRepository,
      page,
      per_page: countOfRepositories,
    },
  });
