import {
  useState,
  useEffect,
  useCallback,
  FC,
  Suspense,
  lazy,
  useMemo,
} from 'react';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import Input from '../../components/UI/Input';
import Pagination from '../../components/UI/Pagination';
import Loader from '../../components/UI/Loader';
import repositoriesStore from '../../stores/RepositoriesStore';
import throttle from '../../shared/utils/throttle';
import notEmptyString from '../../shared/utils/not-empty-string';
import {
  THROTTLE_DELAY,
  SIZE_PAGINATION_API,
  PAGE_SWITCH_STEP,
  INIT_STATE_PAGE,
} from '../../constants';
import { EventInputType, EventSelectType, SortOptionType } from '../../types';
import './style.css';

const ListRepositories = lazy(
  () => import('../../components/ListRepositories'),
);

const Repositories: FC = observer(() => {
  const {
    repositories,
    totalCount,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    searchRepositories,
    sortRepositories,
  } = repositoriesStore;

  const [page, setPage] = useState<number>(INIT_STATE_PAGE);
  const [optionSort, setOptionSort] = useState<SortOptionType>('none');

  const countOfPages: number = totalCount
    ? Math.ceil(totalCount / SIZE_PAGINATION_API)
    : 0;
  const isShowPagination: boolean = countOfPages > 1 && !error.isError;
  const isShowListRepositories: boolean =
    totalCount > 0 && !isLoading && !error.isError;

  const throttledSearchRepository = useMemo(
    () => throttle(searchRepositories, THROTTLE_DELAY),
    [searchRepositories],
  );

  useEffect(() => {
    if (notEmptyString(searchQuery)) {
      throttledSearchRepository(
        searchQuery,
        page,
        SIZE_PAGINATION_API,
        optionSort,
      );
    }
  }, [page, searchQuery]);

  useEffect(() => {
    sortRepositories(optionSort);
  }, [optionSort]);

  const handleInputSearch = useCallback(
    (event: EventInputType) => {
      const valueInput = event.target.value;

      setPage(INIT_STATE_PAGE);
      setSearchQuery(valueInput);
    },
    [setSearchQuery],
  );

  const handleSearchSubmit = () => {
    if (notEmptyString(searchQuery)) {
      throttledSearchRepository(
        searchQuery,
        page,
        SIZE_PAGINATION_API,
        optionSort,
      );
    }
  };

  const handleSelectForSort = (event: EventSelectType) => {
    const value = event.target.value as SortOptionType;

    setOptionSort(value);

    sortRepositories(value);
  };

  const handleNextPage = useCallback(
    () => setPage(prev => Math.min(prev + PAGE_SWITCH_STEP, countOfPages)),
    [countOfPages],
  );

  const handlePrevPage = useCallback(
    () => setPage(prev => Math.max(prev - PAGE_SWITCH_STEP, INIT_STATE_PAGE)),
    [],
  );

  return (
    <Layout>
      <Input
        type="text"
        value={searchQuery}
        placeholder="Search"
        name="search"
        onChange={handleInputSearch}
        modifyViaClassName="search-input"
        onSubmit={handleSearchSubmit}
      />
      <SortRepositoriesAndSearchResults
        resultText={`Result: ${totalCount} repositories`}
        sortRepositories={handleSelectForSort}
      />
      {isLoading && <Loader />}
      {isShowListRepositories && (
        <Suspense fallback={<Loader />}>
          <ListRepositories repositories={repositories} />
        </Suspense>
      )}
      {isShowPagination && (
        <Pagination
          currentPage={page}
          countOfPages={countOfPages}
          hanldeNextData={handleNextPage}
          hanldePrevData={handlePrevPage}
        />
      )}
      {error.isError && <h3>{error.errorMessage}</h3>}
    </Layout>
  );
});

export default Repositories;
