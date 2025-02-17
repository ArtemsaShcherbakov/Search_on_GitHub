import { FC, memo } from 'react';
import RepositoryCard from '../RepositoryCard';
import { IRepository } from '../../interfaces';
import './style.css';

interface IListRepositoriesProps {
  repositories: IRepository[];
}

const ListRepositories: FC<IListRepositoriesProps> = ({ repositories }) => (
  <section className="repositories">
    {repositories.map(repository => (
      <RepositoryCard key={repository.id} repository={repository} />
    ))}
  </section>
);

export default memo(ListRepositories);
