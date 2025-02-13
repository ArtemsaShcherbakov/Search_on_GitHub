import { useState } from 'react';
import Layout from '../../components/Layout';
import SortRepositoriesAndSearchResults from '../../components/SortRepositoriesAndSearchResults';
import RepositoryCard from '../../components/RepositoryCard';
import CustomInput from '../../components/UI/CustomInput';
import { EventInputType } from '../../types';
import './style.css';

const mockRepositoriesFound = 100;

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
      <SortRepositoriesAndSearchResults
        numberRepositoriesFound={mockRepositoriesFound}
      />
      <RepositoryCard />
    </Layout>
  );
};

export default Repositories;
