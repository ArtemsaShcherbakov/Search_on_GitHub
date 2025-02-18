import { FC, lazy, Suspense, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import Loader from '../../components/UI/Loader';
import { NavigateButton } from '../../components/UI/Buttons';
import favoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';
import { SortOptionType, EventSelectType } from '../../types';

const ListRepositories = lazy(
  () => import('../../components/ListRepositories'),
);

const Favorites: FC = observer(() => {
  const { favorites, sortRepositories } = favoritesRepositoriesStore;
  const navigate = useNavigate();

  const countOfFavoritsRepositories = favorites.length;

  const handleToBackPage = useCallback(() => navigate(-1), [navigate]);

  const handleSelectForSort = useCallback(
    (event: EventSelectType) => {
      const value = event.target.value as SortOptionType;

      sortRepositories(value);
    },
    [sortRepositories],
  );

  return (
    <Layout>
      <NavigateButton
        type="button"
        textButton="Back"
        handleOnClick={handleToBackPage}
      />
      <SortRepositoriesAndSearchResults
        resultText={`Favorites: ${countOfFavoritsRepositories}`}
        sortRepositories={handleSelectForSort}
      />
      <Suspense fallback={<Loader />}>
        <ListRepositories repositories={favorites} />
      </Suspense>
    </Layout>
  );
});

export default Favorites;
