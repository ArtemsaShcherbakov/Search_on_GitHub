export interface IPictureOrIcon {
  path: string;
  alt: string;
}

export interface IOwner {
  login: string;
  avatar_url: string;
}

export interface IRepository {
  id: string;
  name: string;
  full_name: string;
  language: string;
  forks: number;
  stargazers_count: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
  owner: IOwner;
  description: string;
  html_url: string;
}

export interface IFoundRepositoryData {
  total_count: number;
  items: IRepository[];
}

export interface IParamsForGetRepository {
  owner: string | undefined;
  repo: string | undefined;
  [key: string]: string | undefined;
}
