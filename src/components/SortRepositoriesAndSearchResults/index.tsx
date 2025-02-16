import Select from '../UI/Select';
import { OPTIONS_FOR_SORTING_REPOSITORIES } from '../../constants';
import { EventSelectType, SortOptionType } from '../../types';
import './style.css';

interface ISortRepositoriesAndSearchResultsProps {
  resultText: string;
  sortRepositories: (optionSort: SortOptionType) => void;
}

const SortRepositoriesAndSearchResults: React.FC<
  ISortRepositoriesAndSearchResultsProps
> = ({ resultText, sortRepositories }) => {
  const handleSelectForSort = (event: EventSelectType) => {
    const value = event.target.value as SortOptionType;
    sortRepositories(value);
  };

  return (
    <section className="repositories-sort">
      <h3 className="repositories-sort__result">{resultText}</h3>
      <Select
        name="sortSelector"
        optionsList={OPTIONS_FOR_SORTING_REPOSITORIES}
        handleChange={handleSelectForSort}
      />
    </section>
  );
};
export default SortRepositoriesAndSearchResults;
