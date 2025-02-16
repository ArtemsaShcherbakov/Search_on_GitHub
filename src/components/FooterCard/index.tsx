import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { IconButton, Button } from '../UI/Buttons';
import FavoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';
import { ICONS } from '../../constants';
import { IRepository } from '../../interfaces';
import './style.css';

interface IFooterCardProps {
  modifyController?: string;
  modifyButton?: string;
  repository: IRepository | null;
}

const FooterCard: FC<PropsWithChildren<IFooterCardProps>> = observer(
  ({ children, modifyController, repository }) => {
    const { addFavoriteRepository, findRepositoryById } =
      FavoritesRepositoriesStore;

    const isFavorit = repository && !!findRepositoryById(repository.id);
    const favoritIcon = isFavorit ? ICONS.favoriteRepository : ICONS.heart;

    const handleAddFavoriteRepository = () =>
      repository && addFavoriteRepository(repository);

    return (
      <footer className="footer-card" role="contentinfo">
        <div className={`footer-card-controller ${modifyController}`}>
          <IconButton type="button" handleOnClick={handleAddFavoriteRepository}>
            <img src={favoritIcon.path} alt={favoritIcon.alt} />
          </IconButton>
          <IconButton type="button">
            <img src={ICONS.copy.path} alt={ICONS.copy.alt} />
          </IconButton>
        </div>
        {children}
      </footer>
    );
  },
);

export default FooterCard;
