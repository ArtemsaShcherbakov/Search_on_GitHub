import { createHashRouter, Navigate } from 'react-router-dom';
import Repositories from './pages/Repositories/index.tsx';
import Favorites from './pages/Favorites/index.tsx';
import ProfileRepository from './pages/ProfileRepository/index.tsx';
import { ROUTES_LIST } from './constants.ts';

const router = createHashRouter([
  {
    path: ROUTES_LIST.root,
    element: <Navigate to={ROUTES_LIST.repositories} />,
  },
  {
    path: ROUTES_LIST.repositories,
    element: <Repositories />,
  },
  {
    path: ROUTES_LIST.favorites,
    element: <Favorites />,
  },
  {
    path: ROUTES_LIST.repository,
    element: <ProfileRepository />,
  },
]);

export default router;
