import { ButtonType, EventButtonType } from '../../../types';
import { IPictureOrIcon } from '../../../interfaces';

interface IButtonProps {
  type: ButtonType;
  nameButton?: string;
  textButton?: string;
  modifyViaClassNameButton?: string;
  modifyViaClassNameIcon?: string;
  classNameIcon?: string;
  icon?: IPictureOrIcon;
  handleOnClick?: (event: EventButtonType) => void;
  disabled?: boolean;
}

export default IButtonProps;
