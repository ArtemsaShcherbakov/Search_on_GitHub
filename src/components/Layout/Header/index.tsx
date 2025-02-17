import { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { IconButton, Button } from '../../UI/Buttons';
import Bage from '../../UI/Bage';
import Avatar from '../../UI/Avatar';
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
        <Button
          type="button"
          modifyViaClassNameButton="header-container-logo"
          handleOnClick={handleNavigateToRepositories}
          textButton="GitHubSearch"
        >
          <img
            className="header-container-logo__icon"
            src={ICONS.magnifier.path}
            alt={ICONS.magnifier.alt}
          />
        </Button>
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
          <Avatar
            modifyViaClassNameAvatar="avatar--small header-container-profile__icon-avatar"
            path={ICONS.avatar.path}
            alt={ICONS.avatar.alt}
          />
        </div>
      </div>
    </header>
  );
});

export default Header;
