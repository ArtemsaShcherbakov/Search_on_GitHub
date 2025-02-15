import { makeAutoObservable, computed, action } from 'mobx';
import {
  loadFavorites,
  saveFavorites,
} from '../shared/helpers/interaction-local-storage';
import { IRepository } from '../interfaces';

class FavoritesRepositoriesStore {
  favorites: IRepository[] = [];

  constructor() {
    makeAutoObservable(this, {
      findRepositoryById: computed,
      addFavoriteRepository: action,
      deleteFavoritRepositoryById: action,
    });
    this.favorites = loadFavorites();
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

  deleteFavoritRepositoryById = (repositoryId: string) => {
    this.favorites = this.favorites.filter(
      repository => repository.id !== repositoryId,
    );

    saveFavorites(this.favorites);
  };

  get findRepositoryById() {
    return (repositoryId: string) =>
      this.favorites.find(repository => repository.id === repositoryId);
  }
}

export default new FavoritesRepositoriesStore();
