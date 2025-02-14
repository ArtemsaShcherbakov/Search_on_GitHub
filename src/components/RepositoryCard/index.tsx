import Card from '../UI/Card';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import FooterCard from './FooterCard';
import { IRepository } from '../../interfaces';

interface IRepositoryCardProps {
  repository: IRepository;
}

const RepositoryCard: React.FC<IRepositoryCardProps> = ({ repository }) => {
  return (
    <Card>
      <HeaderCard
        avatarRepositoryPath={repository.owner.avatar_url}
        numberOfForks={repository.forks}
        numberOfStars={repository.stargazers_count}
      />
      <ContentCard
        fullName={repository.full_name}
        login={repository.owner.login}
        url={repository.url}
      />
      <FooterCard />
    </Card>
  );
};

export default RepositoryCard;
