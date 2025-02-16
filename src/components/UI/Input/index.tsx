import { FC } from 'react';
import { EventInputType, InputKeyboardEventType } from '../../../types';
import './style.css';

interface IInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  modifyViaClassName?: string;
  onChange: (event: EventInputType) => void;
  onSubmit?: () => void;
}

const Input: FC<IInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
  modifyViaClassName,
}) => {
  const handleKeyDown = (event: InputKeyboardEventType) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (onSubmit) {
        onSubmit();
      }
    }
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className={`standart-input ${modifyViaClassName}`}
    />
  );
};

export default Input;
