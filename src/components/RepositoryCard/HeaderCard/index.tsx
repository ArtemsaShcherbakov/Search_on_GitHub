import Avatar from '../../UI/Avatar';
import { AVATAR_REPOSITORY_ALT } from '../constants';
import { ICONS } from '../../../constants';
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
    <Avatar
      modifyViaClassNameBage="avatar--small"
      path={avatarRepositoryPath}
      alt={AVATAR_REPOSITORY_ALT}
    />
    <div className="header-card-statistics">
      <div className="header-card-statistics-container">
        <img src={ICONS.star.path} alt={ICONS.star.alt} />
        <p className="header-card-statistics-container__number">
          {numberOfStars}
        </p>
      </div>
      <div className="header-card-statistics-container">
        <img src={ICONS.branches.path} alt={ICONS.branches.alt} />
        <p className="header-card-statistics-container__number">
          {numberOfForks}
        </p>
      </div>
    </div>
  </header>
);

export default HeaderCard;
