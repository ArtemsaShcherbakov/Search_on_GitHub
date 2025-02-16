export enum ROUTES_LIST {
  repositories = '/repositories',
  favorites = '/favorites',
  repository = '/repositories/:owner/:repo',
}

export enum ERRORS_API {
  unknownError = 'An unknown error occurred',
}

export const THROTTLE_DELAY = 800;

export const SIZE_PAGINATION_API = 28;

export const PAGE_SWITCH_STEP = 1;

export const INIT_SATATE_PAGE = 1;

export const ICONS = {
  star: {
    path: '/assets/icons/star.svg',
    alt: 'Stars GitHub',
  },
  branches: {
    path: '/assets/icons/branches.svg',
    alt: 'Branches GitHub',
  },
  copy: {
    path: '/assets/icons/link_copy.svg',
    alt: 'Link Copy',
  },
  heart: {
    path: '/assets/icons/heart_simple.svg',
    alt: 'Remove from favorites',
  },
  favoriteRepository: {
    path: '/assets/icons/favorite_heart.svg',
    alt: 'Add to favorites',
  },
  archived: {
    path: '/assets/icons/archived.svg',
    alt: 'Add to favorites',
  },
  console: {
    path: '/assets/icons/console.svg',
    alt: 'Add to favorites',
  },
  folder: {
    path: '/assets/icons/folder.svg',
    alt: 'Add to favorites',
  },
  pen: {
    path: '/assets/icons/pen.svg',
    alt: 'Add to favorites',
  },
};
