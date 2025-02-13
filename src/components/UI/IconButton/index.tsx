import { IPictureOrIcon } from '../../../interfaces';
import { ButtonType, EventButtonType } from '../../../types';

interface IIconButtonProps {
  type: ButtonType;
  nameButton?: string;
  classNameButton?: string;
  classNameIcon?: string;
  icon: IPictureOrIcon;
  handleOnClick?: (event: EventButtonType) => void;
  disabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({
  type,
  nameButton,
  classNameButton,
  classNameIcon,
  icon,
  handleOnClick,
  disabled,
}) => (
  <button
    type={type}
    name={nameButton}
    className={`custom-button ${classNameButton}`}
    aria-label={icon.alt}
    onClick={handleOnClick}
    disabled={disabled}
  >
    <img className={classNameIcon} src={icon.path} alt={icon.alt} />
  </button>
);

export default IconButton;
