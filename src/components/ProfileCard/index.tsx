import { FC, useCallback } from 'react';
import ContentCard from './ContentCard';
import FooterCard from '../FooterCard';
import Card from '../UI/Card';
import Divider from '../UI/Divider';
import { Button } from '../UI/Buttons';
import { IRepository } from '../../interfaces';
import './style.css';

interface IProfileCardProps {
  repository: IRepository | null;
}

const ProfileCard: FC<IProfileCardProps> = ({ repository }) => {
  const handleOpenRepository = useCallback(() => {
    if (repository?.html_url) {
      window.open(repository.html_url, '_blank', 'noopener,noreferrer');
    }
  }, [repository?.html_url]);

  return (
    <section className="profile-card">
      <Card modifyViaClassName="profile-card__container">
        <header className="profile-card__header">
          <h3 className="profile-card__title">Профиль</h3>
        </header>
        <ContentCard repository={repository} />
        <Divider />
        <FooterCard
          repository={repository}
          modifyController="profile-card__footer"
        >
          <Button
            type="button"
            textButton="Открыть репозиторий"
            handleOnClick={handleOpenRepository}
            ariaLabel="More about the repository"
            modifyViaClassNameButton="profile-card__button"
          />
        </FooterCard>
      </Card>
    </section>
  );
};

export default ProfileCard;
