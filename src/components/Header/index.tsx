import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Bage from '../UI/Bage';
import FavoritesRepositoriesStore from '../../stores/FavoritesRepositoriesStore';
import { ICONS, TITLE } from './constants';
import './style.css';

const Header: FC = observer(() => {
  const { favorites } = FavoritesRepositoriesStore;

  const favoritesLength = favorites.length;

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="header-container-logo">
          <img
            className="header-container-logo__icon"
            src={ICONS.magnifier.path}
            alt={ICONS.magnifier.alt}
          />
          <h1 className="header-container-logo__text">{TITLE}</h1>
        </div>
        <div className="header-container-profile">
          <Bage badgeContent={favoritesLength}>
            <img
              className="header-container-profile__icon-favorites"
              src={ICONS.heart.path}
              alt={ICONS.heart.alt}
            />
          </Bage>
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
