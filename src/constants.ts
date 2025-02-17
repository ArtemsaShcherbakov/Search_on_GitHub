export enum ROUTES_LIST {
  root = '/',
  repositories = '/repositories',
  favorites = '/favorites',
  repository = '/repositories/:owner/:repo',
}

export enum ERRORS_API {
  unknownError = 'An unknown error occurred',
}

export enum ERROR_VALIDATION {
  fieldVoid = 'Field cannot be empty',
}

export const OPTIONS_FOR_SORTING_REPOSITORIES = [
  { value: 'none', textOption: 'None' },
  { value: 'stars', textOption: 'Sort by stars' },
  { value: 'alphabetical', textOption: 'Alphabetical sorting' },
];

export const INIT_STATE_ERROR_VALIDATION = {
  isError: false,
  errorMessage: '',
};

export const THROTTLE_DELAY = 1000;

export const SIZE_PAGINATION_API = 28;

export const PAGE_SWITCH_STEP = 1;

export const INIT_STATE_PAGE = 1;

const BASE_PATH = '/Search_on_GitHub';

export const ICONS = {
  star: {
    path: `${BASE_PATH}/assets/icons/star.svg`,
    alt: 'Stars GitHub',
  },
  branches: {
    path: `${BASE_PATH}/assets/icons/branches.svg`,
    alt: 'Branches GitHub',
  },
  copy: {
    path: `${BASE_PATH}/assets/icons/link_copy.svg`,
    alt: 'Link Copy',
  },
  heart: {
    path: `${BASE_PATH}/assets/icons/heart_simple.svg`,
    alt: 'Remove from favorites',
  },
  favoriteRepository: {
    path: `${BASE_PATH}/assets/icons/favorite_heart.svg`,
    alt: 'Add to favorites',
  },
  archived: {
    path: `${BASE_PATH}/assets/icons/archived.svg`,
    alt: 'Archived',
  },
  console: {
    path: `${BASE_PATH}/assets/icons/console.svg`,
    alt: 'Console',
  },
  folder: {
    path: `${BASE_PATH}/assets/icons/folder.svg`,
    alt: 'Folder',
  },
  pen: {
    path: `${BASE_PATH}/assets/icons/pen.svg`,
    alt: 'Pen',
  },
  avatar: {
    path: `${BASE_PATH}/assets/icons/avatar.svg`,
    alt: 'User Avatar',
  },
  magnifier: {
    path: `${BASE_PATH}/assets/icons/magnifier.svg`,
    alt: 'Search',
  },
  arrow_navigation: {
    path: `${BASE_PATH}/assets/icons/arrow-navigate.svg`,
    alt: 'Arrow Navigat',
  },
};
