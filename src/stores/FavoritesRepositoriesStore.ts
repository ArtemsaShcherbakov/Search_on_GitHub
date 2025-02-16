import { makeAutoObservable, computed, action } from 'mobx';
import {
  loadFavorites,
  saveFavorites,
} from '../shared/helpers/interaction-local-storage';
import getSortRepositories from '../shared/helpers/get-sort-repositories';
import { IRepository } from '../interfaces';
import { SortOptionType } from '../types';

class FavoritesRepositoriesStore {
  favorites: IRepository[] = [];
  originalFavorites: IRepository[] = [];

  constructor() {
    makeAutoObservable(this, {
      sortRepositories: action,
      findRepositoryById: computed,
      addFavoriteRepository: action,
      deleteFavoritRepositoryById: action,
    });
    this.favorites = loadFavorites();
    this.originalFavorites = [...this.favorites];
  }

  addFavoriteRepository = (repository: IRepository) => {
    const finedRepository = this.findRepositoryById(repository.id);

    if (finedRepository) {
      this.deleteFavoritRepositoryById(finedRepository.id);

      return;
    }

    this.favorites.push(repository);

    saveFavorites(this.favorites);
  };

  deleteFavoritRepositoryById = (repositoryId: number) => {
    this.favorites = this.favorites.filter(
      repository => repository.id !== repositoryId,
    );

    saveFavorites(this.favorites);
  };

  get findRepositoryById() {
    return (repositoryId: number) =>
      this.favorites.find(repository => repository.id === repositoryId);
  }

  sortRepositories = (optionSort: SortOptionType) => {
    this.favorites = getSortRepositories(
      this.favorites,
      this.originalFavorites,
      optionSort,
    );
  };
}

export default new FavoritesRepositoriesStore();
