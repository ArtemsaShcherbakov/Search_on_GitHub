import { PropsWithChildren, FC } from 'react';
import './style.css';

interface ICardProps {
  modifyViaClassName?: string;
}

const Card: FC<PropsWithChildren<ICardProps>> = ({
  children,
  modifyViaClassName,
}) => <article className={`card ${modifyViaClassName}`}>{children}</article>;

export default Card;
