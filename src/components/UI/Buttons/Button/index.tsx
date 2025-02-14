import { FC } from 'react';
import IButtonProps from '../interface';
import './style.css';

const Button: FC<IButtonProps> = ({
  type,
  nameButton,
  textButton,
  modifyViaClassNameButton,
  modifyViaClassNameIcon,
  handleOnClick,
  icon,
  disabled,
}) => (
  <button
    type={type}
    name={nameButton}
    className={`standart-button ${modifyViaClassNameButton}`}
    onClick={handleOnClick}
    aria-label={textButton || icon?.alt}
    disabled={disabled}
  >
    {textButton && textButton}
    {icon && (
      <img className={modifyViaClassNameIcon} src={icon.path} alt={icon.alt} />
    )}
  </button>
);

export default Button;
