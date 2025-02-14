import { FC } from 'react';
import './style.css';

interface ILoaderProps {
  modifyViaClassName?: string;
}

const Loader: FC<ILoaderProps> = ({ modifyViaClassName }) => (
  <div className="loader-container">
    <div className={`loader ${modifyViaClassName}`}></div>
  </div>
);

export default Loader;
