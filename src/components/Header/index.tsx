import { ICONS } from './constants';
import './style.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-logo">
          <img
            className="header-container-logo__icon"
            src={ICONS.magnifier.path}
            alt={ICONS.magnifier.alt}
          />
          <h3 className="header-container-logo__text">GitHubSearch</h3>
        </div>
        <div className="header-container-profile">
          <img
            className="header-container-profile__icon-favorites"
            src={ICONS.heart.path}
            alt={ICONS.heart.alt}
          />
          <img
            className="header-container-profile__icon-avatar"
            src={ICONS.avatar.path}
            alt={ICONS.avatar.alt}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
