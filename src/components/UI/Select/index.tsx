import { FC } from 'react';
import { EventSelectType } from '../../../types';
import './style.css';

interface IOption {
  id?: number | string;
  value: string;
  textOption?: string;
}

interface ISelectProps {
  name: string;
  optionsList: IOption[];
  modifyViaClassName?: string;
  defaultValue?: string;
  handleChange: (event: EventSelectType) => void;
}

const Select: FC<ISelectProps> = ({
  optionsList,
  modifyViaClassName,
  name,
  defaultValue,
  handleChange,
}) => (
  <select
    name={name}
    className={`standart-select ${modifyViaClassName}`}
    defaultValue={defaultValue}
    aria-label={name}
    onChange={handleChange}
  >
    {optionsList.map((item, index) => (
      <option key={item.id || index} value={item.value}>
        {item.textOption}
      </option>
    ))}
  </select>
);

export default Select;
