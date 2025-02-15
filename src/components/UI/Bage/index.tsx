import { FC, PropsWithChildren } from 'react';
import './style.css';

interface IBageProps {
  badgeContent: string | number;
  modifyViaClassNameBage?: string;
  ariaLabel?: string;
}

const Bage: FC<PropsWithChildren<IBageProps>> = ({
  children,
  badgeContent,
  modifyViaClassNameBage,
  ariaLabel = 'Notifications',
}) => (
  <div className="bage-container" role="status" aria-live="polite">
    {children}
    {!!badgeContent && (
      <div
        className={`bage-container-wrapper ${modifyViaClassNameBage}`}
        aria-label={ariaLabel}
      >
        <span className="bage-container-wrapper__content">{badgeContent}</span>
      </div>
    )}
  </div>
);

export default Bage;
