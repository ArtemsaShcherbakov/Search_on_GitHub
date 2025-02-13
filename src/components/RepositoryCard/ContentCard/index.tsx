import './style.css';

interface IContentCardProps {
  fullName: string;
  url: string;
}

const ContentCard: React.FC<IContentCardProps> = ({ fullName, url }) => {
  const nameUser = `@${fullName.split('/')[0]}`;

  return (
    <div className="card-content">
      <h3 className="card-content__name">{nameUser}</h3>
      <a className="card-content__url" href={url} target="_blank">
        {fullName}
      </a>
    </div>
  );
};

export default ContentCard;
