import { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../../UI/Buttons';
import Bage from '../../UI/Bage';
import FavoritesRepositoriesStore from '../../../stores/FavoritesRepositoriesStore';
import { ICONS, ROUTES_LIST } from '../../../constants';
import './style.css';

const Header: FC = observer(() => {
  const { favorites } = FavoritesRepositoriesStore;
  const navigate = useNavigate();

  const favoritesLength = favorites.length;

  const handleNavigateToRepositories = useCallback(() => {
    navigate(ROUTES_LIST.repositories);
  }, [navigate]);

  const handleNavigateToFavorits = useCallback(() => {
    navigate(ROUTES_LIST.favorites);
  }, [navigate]);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div
          className="header-container-logo"
          onClick={handleNavigateToRepositories}
        >
          <img
            className="header-container-logo__icon"
            src={ICONS.magnifier.path}
            alt={ICONS.magnifier.alt}
          />
          <h1 className="header-container-logo__text">GitHubSearch</h1>
        </div>
        <div className="header-container-profile">
          <IconButton
            type="button"
            handleOnClick={handleNavigateToFavorits}
            modifyViaClassNameButton="header-container-profile__button-favorites"
          >
            <Bage badgeContent={favoritesLength}>
              <img
                src={ICONS.heart.path}
                className="header-container-profile__icon-favorites"
                alt={ICONS.heart.path}
              />
            </Bage>
          </IconButton>
          <img
            className="header-container-profile__icon-avatar"
            src={ICONS.avatar.path}
            alt={ICONS.avatar.alt}
          />
        </div>
      </div>
    </header>
  );
});

export default Header;
