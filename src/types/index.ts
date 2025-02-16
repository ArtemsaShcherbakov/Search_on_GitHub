import { ChangeEvent, MouseEvent } from 'react';
import { IRepository } from '../interfaces';

export type EventInputType = ChangeEvent<HTMLInputElement>;

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export type EventButtonType = MouseEvent<HTMLButtonElement>;

export type EventSelectType = ChangeEvent<HTMLSelectElement>;

export type SortOptionType = 'none' | 'stars' | 'alphabetical';

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
