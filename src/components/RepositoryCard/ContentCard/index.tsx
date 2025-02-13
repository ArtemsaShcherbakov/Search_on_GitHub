import './style.css';

interface IContentCardProps {
  fullName: string;
  login: string;
  url: string;
}

const ContentCard: React.FC<IContentCardProps> = ({ fullName, login, url }) => (
  <div className="card-content">
    <h3 className="card-content__name">{login}</h3>
    <a className="card-content__url" href={url} target="_blank">
      {fullName}
    </a>
  </div>
);

export default ContentCard;
