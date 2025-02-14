import { useState, useCallback, FC } from 'react';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import ListRepositories from '../../components/ListRepositories';
import CustomInput from '../../components/UI/CustomInput';
import RepositoriesStore from '../../stores/RepositoriesStore';
import throttle from '../../shared/utils/throttle';
import notEmptyString from '../../shared/utils/not-empty-string';
import { THROTTLE_DELAY } from '../../constants';
import { EventInputType } from '../../types';
import './style.css';

const Repositories: FC = observer(() => {
  const { repositories, totalCount, isLoading, searchRepository } =
    RepositoriesStore;

  const [search, setSearch] = useState<string>('');

  const isShowListRepositories = !!totalCount && !isLoading;

  const throttledSearchRepository = useCallback(
    throttle(searchRepository, THROTTLE_DELAY),
    [],
  );

  const handleInputSearch = (event: EventInputType) => {
    const valueInput = event.target.value;
    setSearch(valueInput);

    if (notEmptyString(valueInput)) {
      throttledSearchRepository(valueInput);
    }
  };

  return (
    <Layout>
      <CustomInput
        type="text"
        value={search}
        placeholder="Search"
        name="search"
        onChange={handleInputSearch}
        modifyStyle="search-input"
      />
      <SortRepositoriesAndSearchResults numberRepositoriesFound={totalCount} />

      {isShowListRepositories && (
        <ListRepositories repositories={repositories} />
      )}
    </Layout>
  );
});

export default Repositories;
