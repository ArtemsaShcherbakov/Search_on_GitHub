import { FC, PropsWithChildren } from 'react';
import IButtonProps from '../interface';
import './style.css';

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  type,
  nameButton,
  textButton,
  modifyViaClassNameButton,
  handleOnClick,
  ariaLabel,
  children,
  disabled,
}) => (
  <button
    type={type}
    name={nameButton}
    className={`standart-button ${modifyViaClassNameButton}`}
    onClick={handleOnClick}
    aria-label={ariaLabel || textButton}
    disabled={disabled}
  >
    {textButton}
    {children}
  </button>
);

export default Button;
