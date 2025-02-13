import CustomButton from '../../UI/CustomButton';
import { ICONS_REPOSITORY_CARD } from '../constants';
import './style.css';

const FooterCard: React.FC = () => (
  <footer className="footer-card">
    <div className="footer-card-controller">
      <CustomButton
        type="button"
        classNameButton="footer-card-controller__icon-button"
        icon={ICONS_REPOSITORY_CARD.heart}
      />
      <CustomButton
        type="button"
        classNameButton="footer-card-controller__icon-button"
        icon={ICONS_REPOSITORY_CARD.copy}
      />
    </div>
    <CustomButton type="button" textButton="Подробнее" />
  </footer>
);

export default FooterCard;
