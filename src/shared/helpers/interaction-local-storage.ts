import { IRepository } from '../../interfaces';

const KEY_STORE_FAVORITES = 'favorites';

export const loadFavorites = (): IRepository[] => {
  const storedFavorites = localStorage.getItem(KEY_STORE_FAVORITES);

  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const saveFavorites = (favorites: IRepository[]): void =>
  localStorage.setItem(KEY_STORE_FAVORITES, JSON.stringify(favorites));
