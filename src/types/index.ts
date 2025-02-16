import { IRepository } from '../interfaces';

export type EventInputType = React.ChangeEvent<HTMLInputElement>;

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export type EventButtonType = React.MouseEvent<HTMLButtonElement>;

type ParametrsStatisticsType =
  | 'language'
  | 'forks'
  | 'stargazers_count'
  | 'archived'
  | 'created_at'
  | 'updated_at';

export type StatisticRepositoryType = Pick<
  IRepository,
  ParametrsStatisticsType
>;
