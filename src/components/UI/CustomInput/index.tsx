import { EventInputType } from '../../../types';
import './style.css';

interface ICustomInput {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  modifyStyle?: string;
  onChange: (event: EventInputType) => void;
}

const CustomInput: React.FC<ICustomInput> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  modifyStyle,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`custom-input ${modifyStyle}`}
  />
);

export default CustomInput;
