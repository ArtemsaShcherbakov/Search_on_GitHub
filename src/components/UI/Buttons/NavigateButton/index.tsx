import { FC, PropsWithChildren } from 'react';
import Button from '../Button';
import { ICONS } from '../../../../constants';
import IButtonProps from '../interface';
import './style.css';

interface INavigateButtonProps extends IButtonProps {}

const NavigateButton: FC<PropsWithChildren<INavigateButtonProps>> = ({
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
