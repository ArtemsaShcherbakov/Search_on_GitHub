import { IconButton, Button } from '../../UI/Buttons';
import { ICONS_REPOSITORY_CARD } from '../constants';
import './style.css';

const FooterCard: React.FC = () => (
  <footer className="footer-card">
    <div className="footer-card-controller">
      <IconButton type="button" icon={ICONS_REPOSITORY_CARD.heart} />
      <IconButton type="button" icon={ICONS_REPOSITORY_CARD.copy} />
    </div>
    <Button type="button" textButton="Подробнее" />
  </footer>
);

export default FooterCard;
