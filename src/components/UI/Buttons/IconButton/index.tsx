import { FC, PropsWithChildren } from 'react';
import Button from '../Button';
import IButtonProps from '../interface';
import './style.css';

const IconButton: FC<PropsWithChildren<Omit<IButtonProps, 'textButton'>>> = ({
  type,
  nameButton,
  modifyViaClassNameButton,
  ariaLabel,
  handleOnClick,
  disabled,
  children,
}) => (
  <Button
    type={type}
    nameButton={nameButton}
    modifyViaClassNameButton={`icon-button ${modifyViaClassNameButton}`}
    aria-label={ariaLabel}
    handleOnClick={handleOnClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default IconButton;
