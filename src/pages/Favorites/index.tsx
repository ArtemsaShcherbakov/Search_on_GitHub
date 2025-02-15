import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import ListRepositories from '../../components/ListRepositories';
import { NavigateButton } from '../../components/UI/Buttons';
import FavoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';

const Favorites: FC = observer(() => {
  const { favorites } = FavoritesRepositoriesStore;
  const navigate = useNavigate();

  const countOfFavoritsRepositories = favorites.length;

  const handleToBackPage = () => navigate(-1);

  return (
    <Layout>
      <NavigateButton
        type="button"
        textButton="Back"
        handleOnClick={handleToBackPage}
      />
      <SortRepositoriesAndSearchResults
        resultText={`Favorites: ${countOfFavoritsRepositories}`}
      />
      <ListRepositories repositories={favorites} />
    </Layout>
  );
});

export default Favorites;
