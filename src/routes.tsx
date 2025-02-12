import { createBrowserRouter } from 'react-router-dom';
import Repositories from './pages/Repositories/index.tsx';

import { ROUTES_LIST } from './constants.ts';

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.repositories,
    element: <Repositories />,
  },
]);

export default router;
