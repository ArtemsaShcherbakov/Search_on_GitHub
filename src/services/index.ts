import { get } from '../http';
import { AxiosResponse } from 'axios';
import { IFoundRepositoryData } from '../interfaces';

export const getFoundRepositories = (
  desiredRepository: string,
): Promise<AxiosResponse<IFoundRepositoryData>> =>
  get(`/search/repositories?q=${desiredRepository}`);
