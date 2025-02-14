import { useState, useEffect, useCallback, FC, Suspense, lazy } from 'react';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import Input from '../../components/UI/Input';
import Pagination from '../../components/UI/Pagination';
import Loader from '../../components/UI/Loader';
import RepositoriesStore from '../../stores/RepositoriesStore';
import throttle from '../../shared/utils/throttle';
import notEmptyString from '../../shared/utils/not-empty-string';
import {
  THROTTLE_DELAY,
  SIZE_PAGINATION_API,
  PAGE_SWITCH_STEP,
  INIT_SATATE_PAGE,
} from '../../constants';
import { EventInputType } from '../../types';
import './style.css';

const ListRepositories = lazy(
  () => import('../../components/ListRepositories'),
);

const Repositories: FC = observer(() => {
  const { repositories, totalCount, isLoading, searchRepository } =
    RepositoriesStore;

  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(INIT_SATATE_PAGE);

  const countOfPages: number = totalCount
    ? Math.ceil(totalCount / SIZE_PAGINATION_API)
    : 0;
  const isShowPagination: boolean = countOfPages > 1;
  const isShowListRepositories: boolean = totalCount > 0 && !isLoading;

  const throttledSearchRepository = useCallback(
    throttle(searchRepository, THROTTLE_DELAY),
    [],
  );

  useEffect(() => {
    if (notEmptyString(search)) {
      throttledSearchRepository(search, page, SIZE_PAGINATION_API);
    }
  }, [page]);

  const handleInputSearch = (event: EventInputType) => {
    const valueInput = event.target.value;

    setSearch(valueInput);

    if (notEmptyString(valueInput)) {
      throttledSearchRepository(
        valueInput,
        INIT_SATATE_PAGE,
        SIZE_PAGINATION_API,
      );

      setPage(INIT_SATATE_PAGE);
    }
  };

  const handleNextPage = () =>
    setPage(prev => Math.min(prev + PAGE_SWITCH_STEP, countOfPages));

  const handlePrevPage = () =>
    setPage(prev => Math.max(prev - PAGE_SWITCH_STEP, INIT_SATATE_PAGE));

  return (
    <Layout>
      <Input
        type="text"
        value={search}
        placeholder="Search"
        name="search"
        onChange={handleInputSearch}
        modifyViaClassName="search-input"
      />
      <SortRepositoriesAndSearchResults
        resultText={`Result: ${totalCount} repositories`}
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
    </Layout>
  );
});

export default Repositories;
