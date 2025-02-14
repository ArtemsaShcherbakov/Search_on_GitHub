import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
import { getFoundRepositories } from '../services';
import { ERRORS_API } from '../constants';
import { IRepository } from '../interfaces';

class RepositoriesStore {
  repositories: IRepository[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  searchRepository = async (search: string) => {
    try {
      this.isLoading = true;

      const foundRepositoryData = await getFoundRepositories(search);

      console.log('mobX', foundRepositoryData);

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
}

export default new RepositoriesStore();
