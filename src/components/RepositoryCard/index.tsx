import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import FooterCard from '../FooterCard';
import Card from '../UI/Card';
import { Button } from '../UI/Buttons';
import { IRepository } from '../../interfaces';

interface IRepositoryCardProps {
  repository: IRepository;
}

const RepositoryCard: FC<IRepositoryCardProps> = ({ repository }) => {
  const navigate = useNavigate();

  const handleMoreDetailsButton = useCallback(() => {
    navigate(`/repositories/${repository.owner.login}/${repository.name}`);
  }, [navigate, repository.owner.login, repository.name]);

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
        url={repository.html_url}
      />
      <FooterCard repository={repository}>
        <Button
          type="button"
          textButton="Подробнее"
          handleOnClick={handleMoreDetailsButton}
          ariaLabel="More details"
        />
      </FooterCard>
    </Card>
  );
};

export default RepositoryCard;
