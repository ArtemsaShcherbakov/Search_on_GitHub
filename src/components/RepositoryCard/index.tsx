import Card from '../Card';
import HeaderCard from './HeaderCard/inex';
import ContentCard from './ContentCard';
import FooterCard from './FooterCard';
import { MOCK_DATA_REPOSITORY } from './constants';

const RepositoryCard: React.FC = () => {
  return (
    <Card>
      <HeaderCard
        avatarRepositoryPath={MOCK_DATA_REPOSITORY.owner.avatar_url}
        numberOfForks={MOCK_DATA_REPOSITORY.forks}
        numberOfStars={MOCK_DATA_REPOSITORY.stargazers_count}
      />
      <ContentCard
        fullName={MOCK_DATA_REPOSITORY.full_name}
        url={MOCK_DATA_REPOSITORY.html_url}
      />
      <FooterCard />
    </Card>
  );
};

export default RepositoryCard;
