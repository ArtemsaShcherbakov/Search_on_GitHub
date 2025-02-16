import { FC } from 'react';
import Avatar from '../../UI/Avatar';
import createStatisticsList from '../../../shared/helpers/create-statistics-list';
import { IRepository } from '../../../interfaces';
import './style.css';

interface IContentCardProps {
  repository: IRepository | null;
}

const ContentCard: FC<IContentCardProps> = ({ repository }) => {
  const statisticsList = repository
    ? createStatisticsList({
        ...repository,
      })
    : [];
  const pathAvatar = repository?.owner.avatar_url || '';

  return (
    <div className="card-repo">
      <div className="card-repo-header">
        <Avatar path={pathAvatar} alt="User Avatar" />
        <div className="card-repo-header-text">
          <p className="card-repo-header-text__tite">{repository?.full_name}</p>
          <p className="card-repo-header-text__description">
            {repository?.description}
          </p>
        </div>
      </div>
      <div className="card-repo-statistics">
        {statisticsList.map((statistic, index) => (
          <div key={index} className="card-repo-statistics-container">
            <div className="card-repo-statistics-container__icon">
              <img src={statistic.icon.path} alt={statistic.icon.alt} />
            </div>
            <div className="card-repo-statistics-container-data">
              <p className="card-repo-statistics-container-data__value">
                {statistic.value}
              </p>
              <p className="card-repo-statistics-container-data__description">
                {statistic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
