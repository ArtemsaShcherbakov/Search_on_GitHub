import { FC, PropsWithChildren } from 'react';
import Button from '../Button';
import IButtonProps from '../interface';
import './style.css';

const ARROW_NAVIGATE_ICON = {
  path: '/assets/icons/arrow-navigate.svg',
  alt: 'Arrow Navigat',
};

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
      <img src={ARROW_NAVIGATE_ICON.path} alt={ARROW_NAVIGATE_ICON.alt} />
    )}
  </Button>
);

export default NavigateButton;
