import './style.css';

interface IOption {
  id?: number | string;
  value: string;
  textOption?: string;
}

interface ICustomSelectProps {
  name: string;
  optionsList: IOption[];
  className?: string;
  defaultValue?: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  optionsList,
  className,
  name,
  defaultValue,
}) => (
  <select
    name={name}
    className={`custom-select ${className}`}
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

export default CustomSelect;
