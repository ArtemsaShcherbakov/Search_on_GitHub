import formattingDate from '../../shared/utils/formatting-date';
import getYesNo from '../utils/get-yes-no';
import { ICONS } from '../../constants';
import { StatisticRepositoryType } from '../../types';
import { IPictureOrIcon } from '../../interfaces';

interface IStatistics {
  icon: IPictureOrIcon;
  value: number | string | boolean | null;
  description: string;
}

const createStatisticsList = ({
  language,
  forks,
  stargazers_count,
  archived,
  created_at,
  updated_at,
}: StatisticRepositoryType): IStatistics[] => [
  {
    icon: ICONS.star,
    value: stargazers_count,
    description: 'Количество звезд',
  },
  {
    icon: ICONS.branches,
    value: forks,
    description: 'Количестсво форков',
  },
  {
    icon: ICONS.archived,
    value: getYesNo(archived),
    description: 'В архиве',
  },
  {
    icon: ICONS.console,
    value: language,
    description: 'Язык',
  },
  {
    icon: ICONS.folder,
    value: formattingDate(created_at),
    description: 'Cоздано',
  },
  {
    icon: ICONS.pen,
    value: formattingDate(updated_at),
    description: 'Изменено',
  },
];

export default createStatisticsList;
