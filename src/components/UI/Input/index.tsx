import { FC } from 'react';
import { EventInputType } from '../../../types';
import './style.css';

interface IInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  modifyViaClassName?: string;
  onChange: (event: EventInputType) => void;
}

const Input: FC<IInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  modifyViaClassName,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`standart-input ${modifyViaClassName}`}
  />
);

export default Input;
