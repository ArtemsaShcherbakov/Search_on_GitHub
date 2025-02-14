import { FC } from 'react';
import Button from '../Button';
import IButtonProps from '../interface';
import './style.css';

interface IIconButton extends Omit<IButtonProps, 'textButton'> {}

const IconButton: FC<IIconButton> = ({
  type,
  nameButton,
  modifyViaClassNameButton,
  modifyViaClassNameIcon,
  icon,
  handleOnClick,
  disabled,
}) => (
  <Button
    type={type}
    nameButton={nameButton}
    icon={icon}
    modifyViaClassNameButton={`icon-button ${modifyViaClassNameButton}`}
    modifyViaClassNameIcon={modifyViaClassNameIcon}
    aria-label={icon?.alt}
    handleOnClick={handleOnClick}
    disabled={disabled}
  />
);

export default IconButton;
