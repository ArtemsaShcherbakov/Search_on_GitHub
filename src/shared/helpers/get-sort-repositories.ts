import { IRepository } from '../../interfaces';
import { SortOptionType } from '../../types';

const getSortRepositories = (
  repositories: IRepository[],
  originalRepositories: IRepository[],
  optionSort: SortOptionType,
): IRepository[] => {
  switch (optionSort) {
    case 'stars':
      return [...repositories].sort(
        (a, b) => b.stargazers_count - a.stargazers_count,
      );
    case 'alphabetical':
      return [...repositories].sort((a, b) => a.name.localeCompare(b.name));
    case 'none':
      return [...originalRepositories];
    default:
      return repositories;
  }
};

export default getSortRepositories;
