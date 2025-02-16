import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
import { getFoundRepositories, getOneRepository } from '../services';
import getSortRepositories from '../shared/helpers/get-sort-repositories';
import { ERRORS_API } from '../constants';
import { IRepository, IParamsForGetRepository } from '../interfaces';
import { SortOptionType } from '../types';

class RepositoriesStore {
  repositories: IRepository[] = [];
  currentRepository: IRepository | null = null;
  originalRepositories: IRepository[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor() {
    makeAutoObservable(this);
    this.originalRepositories = [...this.originalRepositories];
  }

  searchRepositories = async (
    search: string,
    page: number,
    countOfRepositories: number,
  ) => {
    try {
      this.isLoading = true;

      const foundRepositoryData = await getFoundRepositories(
        search,
        page,
        countOfRepositories,
      );

      runInAction(() => {
        this.repositories = foundRepositoryData.data.items;
        this.totalCount = foundRepositoryData.data.total_count;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        const axiosError = error as AxiosError<{ error_message: string }>;
        this.errorMessage = axiosError.message || ERRORS_API.unknownError;
      });

      console.error(error);
    }
  };

  getRepositoryByNameOwnerAndRepository = async (
    params: IParamsForGetRepository,
  ) => {
    try {
      this.isLoading = true;

      const foundRepository = await getOneRepository(params);

      runInAction(() => {
        this.currentRepository = foundRepository.data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        const axiosError = error as AxiosError<{ error_message: string }>;
        this.errorMessage = axiosError.message || ERRORS_API.unknownError;
      });

      console.error(error);
    }
  };

  sortRepositories = (optionSort: SortOptionType) => {
    this.repositories = getSortRepositories(
      this.repositories,
      this.originalRepositories,
      optionSort,
    );
  };
}

export default new RepositoriesStore();
