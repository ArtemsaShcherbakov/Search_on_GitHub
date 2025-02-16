import { FC } from 'react';
import Select from '../UI/Select';
import { OPTIONS_FOR_SORTING_REPOSITORIES } from '../../constants';
import { EventSelectType } from '../../types';
import './style.css';

interface ISortRepositoriesAndSearchResultsProps {
  resultText: string;
  sortRepositories: (event: EventSelectType) => void;
}

const SortRepositoriesAndSearchResults: FC<
  ISortRepositoriesAndSearchResultsProps
> = ({ resultText, sortRepositories }) => (
  <section className="repositories-sort">
    <h3 className="repositories-sort__result">{resultText}</h3>
    <Select
      name="sortSelector"
      optionsList={OPTIONS_FOR_SORTING_REPOSITORIES}
      handleChange={sortRepositories}
    />
  </section>
);

export default SortRepositoriesAndSearchResults;
