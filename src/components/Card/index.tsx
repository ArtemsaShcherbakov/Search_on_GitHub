import { PropsWithChildren } from 'react';
import './style.css';

interface ICardProps {
  modifyStyle?: string;
}

const Card: React.FC<PropsWithChildren<ICardProps>> = ({
  children,
  modifyStyle,
}) => {
  return (
    <article className={`card ${modifyStyle}`}>
      {/* <header className="card-header">
        <img
          src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
          alt="Hot air balloons"
        />
        <div>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
            alt="Hot air balloons"
          />
        </div>
        <div>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
            alt="Hot air balloons"
          />
        </div>
      </header>
      <div className="card-content">
        <h3>@tinghuiz</h3>
        <a>tinghuiz/SfMLearner</a>
      </div>
      <footer></footer> */}
      {children}
    </article>
  );
};

export default Card;
