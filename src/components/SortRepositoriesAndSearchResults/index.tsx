import Select from '../UI/Select';
import './style.css';

interface ISortRepositoriesAndSearchResultsProps {
  resultText: string;
}

const mockOptionList = [{ value: '5', textOption: 'Sort by stars' }];

const SortRepositoriesAndSearchResults: React.FC<
  ISortRepositoriesAndSearchResultsProps
> = ({ resultText }) => (
  <section className="repositories-sort">
    <h3 className="repositories-sort__result">{resultText}</h3>
    <Select name="sortSelector" optionsList={mockOptionList} />
  </section>
);

export default SortRepositoriesAndSearchResults;
