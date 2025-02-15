import { observer } from 'mobx-react-lite';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import FooterCard from './FooterCard';
import Card from '../UI/Card';
import FavoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';
import { IRepository } from '../../interfaces';

interface IRepositoryCardProps {
  repository: IRepository;
}

const RepositoryCard: React.FC<IRepositoryCardProps> = observer(
  ({ repository }) => {
    const { addFavoriteRepository, findRepositoryById } =
      FavoritesRepositoriesStore;

    const isFavorit = !!findRepositoryById(repository.id);

    const handleAddFavoriteRepository = () => {
      addFavoriteRepository(repository);
    };

    return (
      <Card>
        <HeaderCard
          avatarRepositoryPath={repository.owner.avatar_url}
          numberOfForks={repository.forks}
          numberOfStars={repository.stargazers_count}
        />
        <ContentCard
          fullName={repository.full_name}
          login={repository.owner.login}
          url={repository.url}
        />
        <FooterCard
          isFavorit={isFavorit}
          handleAddFavoriteRepository={handleAddFavoriteRepository}
        />
      </Card>
    );
  },
);

export default RepositoryCard;
