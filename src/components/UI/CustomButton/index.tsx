import { IPictureOrIcon } from '../../../interfaces';
import { ButtonType, EventButtonType } from '../../../types';
import './style.css';

interface ICustomButtonProps {
  type: ButtonType;
  nameButton?: string;
  textButton?: string;
  classNameButton?: string;
  classNameIcon?: string;
  icon?: IPictureOrIcon;
  handleOnClick?: (event: EventButtonType) => void;
  disabled?: boolean;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  type,
  nameButton,
  textButton,
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
    aria-label={textButton || icon?.alt}
    onClick={handleOnClick}
    disabled={disabled}
  >
    {textButton && textButton}
    {icon && <img className={classNameIcon} src={icon.path} alt={icon.alt} />}
  </button>
);

export default CustomButton;
