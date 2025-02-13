import './style.css';

interface IOption {
  id?: number | string;
  value: string;
  textOption?: string;
}

interface ICustomSelectProps {
  name: string;
  optionsList: IOption[];
  modifyStyle?: string;
  defaultValue?: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  optionsList,
  modifyStyle,
  name,
  defaultValue,
}) => (
  <select
    name={name}
    className={`custom-select ${modifyStyle}`}
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
