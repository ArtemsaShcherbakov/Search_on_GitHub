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
  full_name: string;
  language: string;
  forks: number;
  stargazers_count: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
  owner: IOwner;
  url: string;
}

export interface IFoundRepositoryData {
  total_count: number;
  items: IRepository[];
}
