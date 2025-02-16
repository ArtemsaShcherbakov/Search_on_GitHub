import { FC } from 'react';
import './style.css';

interface IDividerProps {
  type?: 'horizontal' | 'vertical';
  modifyViaClassName?: string;
}

const Divider: FC<IDividerProps> = ({ type, modifyViaClassName }) => {
  const className = `divider ${type === 'vertical' ? 'divider-vertical' : ''} ${
    modifyViaClassName || ''
  }`;

  return <div className={className}></div>;
};

export default Divider;
