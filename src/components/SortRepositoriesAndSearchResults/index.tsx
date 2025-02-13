import CustomSelect from '../UI/CustomSelect';
import './style.css';

interface ISortRepositoriesAndSearchResultsProps {
  numberRepositoriesFound: number;
}

const mockOptionList = [{ value: '5', textOption: 'Sort by stars' }];

const SortRepositoriesAndSearchResults: React.FC<
  ISortRepositoriesAndSearchResultsProps
> = ({ numberRepositoriesFound }) => {
  return (
    <section className="repositories-sort">
      <h3 className="repositories-sort__result">
        Result: {numberRepositoriesFound} repositories
      </h3>
      <CustomSelect name="sortSelector" optionsList={mockOptionList} />
    </section>
  );
};

export default SortRepositoriesAndSearchResults;
