import { FC, PropsWithChildren, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { IconButton } from '../UI/Buttons';
import FavoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';
import throttle from '../../shared/utils/throttle';
import { ICONS } from '../../constants';
import { IRepository } from '../../interfaces';
import './style.css';

interface IFooterCardProps {
  modifyController?: string;
  modifyButton?: string;
  repository: IRepository | null;
}

const delayCopy = 2000;

const FooterCard: FC<PropsWithChildren<IFooterCardProps>> = observer(
  ({ children, modifyController, repository }) => {
    const { addFavoriteRepository, findRepositoryById } =
      FavoritesRepositoriesStore;

    const isFavorit = repository && !!findRepositoryById(repository.id);
    const favoritIcon = isFavorit ? ICONS.favoriteRepository : ICONS.heart;

    const handleCopyPathRepository = useCallback(
      () =>
        repository?.html_url &&
        navigator.clipboard.writeText(repository?.html_url),
      [repository],
    );

    const throttleHandleCopyPathRepository = throttle(
      handleCopyPathRepository,
      delayCopy,
    );

    const handleAddFavoriteRepository = useCallback(
      () => repository && addFavoriteRepository(repository),
      [repository, addFavoriteRepository],
    );

    return (
      <footer className="footer-card" role="contentinfo">
        <div className={`footer-card-controller ${modifyController}`}>
          <IconButton type="button" handleOnClick={handleAddFavoriteRepository}>
            <img src={favoritIcon.path} alt={favoritIcon.alt} />
          </IconButton>
          <IconButton
            type="button"
            handleOnClick={throttleHandleCopyPathRepository}
          >
            <img src={ICONS.copy.path} alt={ICONS.copy.alt} />
          </IconButton>
        </div>
        {children}
      </footer>
    );
  },
);

export default FooterCard;
