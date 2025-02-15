import { ButtonType, EventButtonType } from '../../../types';

interface IButtonProps {
  type: ButtonType;
  nameButton?: string;
  textButton?: string;
  modifyViaClassNameButton?: string;
  classNameIcon?: string;
  ariaLabel?: string;
  handleOnClick?: (event: EventButtonType) => void;
  disabled?: boolean;
}

export default IButtonProps;
