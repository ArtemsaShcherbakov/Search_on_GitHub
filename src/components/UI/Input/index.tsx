import { FC } from 'react';
import {
  EventInputType,
  InputKeyboardEventType,
  InputRefType,
} from '../../../types';
import './style.css';

interface IInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  modifyViaClassName?: string;
  onChange: (event: EventInputType) => void;
  onSubmit?: () => void;
  ref?: InputRefType;
  errorText?: string;
  error?: boolean;
}

const Input: FC<IInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
  modifyViaClassName,
  ref,
  errorText,
  error,
}) => {
  const className = error
    ? `standart-input standart-input--error ${modifyViaClassName}`
    : `standart-input ${modifyViaClassName}`;

  const handleKeyDown = (event: InputKeyboardEventType) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (onSubmit) {
        onSubmit();
      }
    }
  };

  return (
    <>
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={className}
      />
      {error && <p className="error-text">{errorText}</p>}
    </>
  );
};

export default Input;
