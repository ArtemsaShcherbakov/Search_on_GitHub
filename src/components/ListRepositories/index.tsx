import RepositoryCard from '../RepositoryCard';
import { IRepository } from '../../interfaces';
import './style.css';

interface IListRepositoriesProps {
  repositories: IRepository[];
}

const ListRepositories: React.FC<IListRepositoriesProps> = ({
  repositories,
}) => {
  return (
    <section className="repositories">
      {repositories.map(repository => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </section>
  );
};

export default ListRepositories;
