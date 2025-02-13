import { PropsWithChildren } from 'react';
import './style.css';

interface ICardProps {
  modifyStyle?: string;
}

const Card: React.FC<PropsWithChildren<ICardProps>> = ({
  children,
  modifyStyle,
}) => <article className={`card ${modifyStyle}`}>{children}</article>;

export default Card;
