import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import FooterCard from '../FooterCard';
import Card from '../UI/Card';
import { Button } from '../UI/Buttons';
import getCroppedText from '../../shared/utils/get-cropped-text';
import { FULL_NAME_MAX_LENGTH, LOGIN_MAX_LENGTH } from './constants';
import { IRepository } from '../../interfaces';
import './style.css';

interface IRepositoryCardProps {
  repository: IRepository;
}

const RepositoryCard: FC<IRepositoryCardProps> = ({ repository }) => {
  const navigate = useNavigate();

  const login =
    '@' + getCroppedText(repository.owner.login, 0, LOGIN_MAX_LENGTH);

  const fullName = getCroppedText(
    repository.full_name,
    0,
    FULL_NAME_MAX_LENGTH,
  );

  const handleMoreDetailsButton = useCallback(() => {
    navigate(`/repositories/${repository.owner.login}/${repository.name}`);
  }, [navigate, repository.owner.login, repository.name]);

  return (
    <Card modifyViaClassName="modify-card-repository">
      <HeaderCard
        avatarRepositoryPath={repository.owner.avatar_url}
        numberOfForks={repository.forks}
        numberOfStars={repository.stargazers_count}
      />
      <ContentCard
        fullName={fullName}
        login={login}
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
