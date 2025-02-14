import { ICONS_REPOSITORY_CARD, AVATAR_REPOSITORY_ALT } from '../constants';
import './style.css';

interface HeaderCardProps {
  avatarRepositoryPath: string;
  numberOfForks: number;
  numberOfStars: number;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  avatarRepositoryPath,
  numberOfForks,
  numberOfStars,
}) => (
  <header className="header-card">
    <img
      className="header-card__avatar"
      src={avatarRepositoryPath}
      alt={AVATAR_REPOSITORY_ALT}
    />
    <div className="header-card-statistics">
      <div className="header-card-statistics-container">
        <img
          src={ICONS_REPOSITORY_CARD.star.path}
          alt={ICONS_REPOSITORY_CARD.star.alt}
        />
        <p className="header-card-statistics-container__number">
          {numberOfStars}
        </p>
      </div>
      <div className="header-card-statistics-container">
        <img
          src={ICONS_REPOSITORY_CARD.branches.path}
          alt={ICONS_REPOSITORY_CARD.branches.alt}
        />
        <p className="header-card-statistics-container__number">
          {numberOfForks}
        </p>
      </div>
    </div>
  </header>
);

export default HeaderCard;
