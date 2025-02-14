import { FC } from 'react';
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
}

const Select: FC<ISelectProps> = ({
  optionsList,
  modifyViaClassName,
  name,
  defaultValue,
}) => (
  <select
    name={name}
    className={`standart-select ${modifyViaClassName}`}
    defaultValue={defaultValue}
    aria-label={name}
  >
    {optionsList.map((item, index) => (
      <option key={item.id || index} value={item.value}>
        {item.textOption}
      </option>
    ))}
  </select>
);

export default Select;
