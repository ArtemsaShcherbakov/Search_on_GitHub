import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
import { getFoundRepositories, getOneRepository } from '../services';
import getSortRepositories from '../shared/helpers/get-sort-repositories';
import { ERRORS_API } from '../constants';
import { IRepository, IParamsForGetRepository, IError } from '../interfaces';
import { SortOptionType } from '../types';

class RepositoriesStore {
  repositories: IRepository[] = [];
  currentRepository: IRepository | null = null;
  originalRepositories: IRepository[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  error: IError = {
    isError: false,
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this);
    this.originalRepositories = [...this.originalRepositories];
  }

  searchRepositories = async (
    search: string,
    page: number,
    countOfRepositories: number,
    optionSort: SortOptionType,
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
        this.originalRepositories = [...foundRepositoryData.data.items];
        this.isLoading = false;
        this.error.isError = false;
        this.error.errorMessage = '';
      });

      this.sortRepositories(optionSort);
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error.isError = true;
        this.repositories = [];
        this.totalCount = 0;
        this.originalRepositories = [];

        const axiosError = error as AxiosError<{ error_message: string }>;
        this.error.errorMessage = axiosError.message || ERRORS_API.unknownError;
      });
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
        this.error.isError = false;
        this.error.errorMessage = '';
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error.isError = true;
        this.currentRepository = null;

        const axiosError = error as AxiosError<{ error_message: string }>;
        this.error.errorMessage = axiosError.message || ERRORS_API.unknownError;
      });
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
