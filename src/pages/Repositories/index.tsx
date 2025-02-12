import { useState } from 'react';
import Layout from '../../components/Layout';
import CustomInput from '../../components/UI/CustomInput';
import { EventInputType } from '../../types';
import './style.css';

const Repositories: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleInputSearch = (event: EventInputType) => {
    const valueInput = event.target.value;

    setSearch(valueInput);
  };

  return (
    <Layout>
      <CustomInput
        type="text"
        value={search}
        placeholder="Search"
        name="search"
        onChange={handleInputSearch}
        modifyStyle="search-input"
      />
    </Layout>
  );
};

export default Repositories;
