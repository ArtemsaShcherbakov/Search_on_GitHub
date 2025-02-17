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
import useInputFocus from '../../hooks/useInputFocus';
import repositoriesStore from '../../stores/RepositoriesStore';
import throttle from '../../shared/utils/throttle';
import notEmptyString from '../../shared/utils/not-empty-string';
import {
  THROTTLE_DELAY,
  SIZE_PAGINATION_API,
  PAGE_SWITCH_STEP,
  INIT_STATE_PAGE,
  ERROR_VALIDATION,
  INIT_STATE_ERROR_VALIDATION,
} from '../../constants';
import { EventInputType, EventSelectType, SortOptionType } from '../../types';
import { IError } from '../../interfaces';
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
  const [errorValidation, setErrorValidation] = useState<IError>(
    INIT_STATE_ERROR_VALIDATION,
  );

  const { inputRef, isFocused } = useInputFocus();

  const countOfPages = useMemo(
    () => (totalCount ? Math.ceil(totalCount / SIZE_PAGINATION_API) : 0),
    [totalCount],
  );

  const isShowPagination: boolean = countOfPages > 1 && !error.isError;

  const isShowListRepositories: boolean =
    totalCount > 0 && !isLoading && !error.isError;

  const isShowError = isFocused && errorValidation.isError;

  const errorText =
    isFocused && errorValidation.isError ? errorValidation.errorMessage : '';

  const throttledSearchRepository = useMemo(
    () => throttle(searchRepositories, THROTTLE_DELAY),
    [searchRepositories],
  );

  const sendData = useCallback(() => {
    if (notEmptyString(searchQuery)) {
      throttledSearchRepository(
        searchQuery,
        page,
        SIZE_PAGINATION_API,
        optionSort,
      );

      setErrorValidation({ isError: false, errorMessage: '' });

      return;
    }

    setErrorValidation({
      isError: true,
      errorMessage: ERROR_VALIDATION.fieldVoid,
    });
  }, [searchQuery, page, optionSort, throttledSearchRepository]);

  useEffect(() => {
    sendData();
  }, [page, searchQuery]);

  useEffect(() => {
    sortRepositories(optionSort);
  }, [optionSort]);

  const handleInputSearch = useCallback(
    (event: EventInputType) => {
      const valueInput = event.target.value;

      setPage(INIT_STATE_PAGE);
      setSearchQuery(valueInput);
      setErrorValidation({ isError: false, errorMessage: '' });
    },
    [setSearchQuery],
  );

  const handleSearchSubmit = () => {
    sendData();
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
        ref={inputRef}
        type="text"
        value={searchQuery}
        placeholder="Search"
        name="search"
        modifyViaClassName="search-input"
        onChange={handleInputSearch}
        onSubmit={handleSearchSubmit}
        error={isShowError}
        errorText={errorText}
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
