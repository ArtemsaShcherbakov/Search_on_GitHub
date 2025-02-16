import { FC } from 'react';
import { IPictureOrIcon } from '../../../interfaces';
import './style.css';

interface IAvatarProps extends IPictureOrIcon {
  modifyViaClassNameBage?: string;
}

const Avatar: FC<IAvatarProps> = ({ path, alt, modifyViaClassNameBage }) => (
  <img src={path} alt={alt} className={`avatar ${modifyViaClassNameBage}`} />
);

export default Avatar;
