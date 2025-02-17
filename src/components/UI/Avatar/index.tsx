import { FC } from 'react';
import { IPictureOrIcon } from '../../../interfaces';
import './style.css';

interface IAvatarProps extends IPictureOrIcon {
  modifyViaClassNameAvatar?: string;
}

const Avatar: FC<IAvatarProps> = ({ path, alt, modifyViaClassNameAvatar }) => (
  <img src={path} alt={alt} className={`avatar ${modifyViaClassNameAvatar}`} />
);

export default Avatar;
