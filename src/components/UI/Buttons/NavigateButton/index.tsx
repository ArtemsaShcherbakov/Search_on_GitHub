import { FC, PropsWithChildren } from 'react';
import Button from '../Button';
import { ICONS } from '../../../../constants';
import IButtonProps from '../interface';
import './style.css';

const NavigateButton: FC<PropsWithChildren<IButtonProps>> = ({
  type,
  nameButton,
  textButton,
  modifyViaClassNameButton,
  handleOnClick,
  disabled,
  children,
}) => (
  <Button
    type={type}
    nameButton={nameButton}
    modifyViaClassNameButton={`navigate-button ${modifyViaClassNameButton}`}
    handleOnClick={handleOnClick}
    disabled={disabled}
    textButton={textButton}
  >
    {children ? (
      children
    ) : (
      <img src={ICONS.arrow_navigation.path} alt={ICONS.arrow_navigation.alt} />
    )}
  </Button>
);

export default NavigateButton;
