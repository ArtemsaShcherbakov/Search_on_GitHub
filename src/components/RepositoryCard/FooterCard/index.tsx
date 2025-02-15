import { FC } from 'react';
import { IconButton, Button } from '../../UI/Buttons';
import { ICONS_REPOSITORY_CARD } from '../constants';
import './style.css';

interface IFooterCardProps {
  isFavorit: boolean;
  handleAddFavoriteRepository: () => void;
}

const FooterCard: FC<IFooterCardProps> = ({
  isFavorit,
  handleAddFavoriteRepository,
}) => {
  const favoritIcon = isFavorit
    ? ICONS_REPOSITORY_CARD.favoriteRepository
    : ICONS_REPOSITORY_CARD.heart;

  return (
    <footer className="footer-card" role="contentinfo">
      <div className="footer-card-controller">
        <IconButton type="button" handleOnClick={handleAddFavoriteRepository}>
          <img src={favoritIcon.path} alt={favoritIcon.alt} />
        </IconButton>
        <IconButton type="button">
          <img
            src={ICONS_REPOSITORY_CARD.copy.path}
            alt={ICONS_REPOSITORY_CARD.copy.alt}
          />
        </IconButton>
      </div>
      <Button type="button" textButton="Подробнее" />
    </footer>
  );
};
export default FooterCard;
