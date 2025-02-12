import { PropsWithChildren } from 'react';
import Header from '../Header';
import './style.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <div className="layout">
      <div className="layout-container">{children}</div>
    </div>
  </>
);

export default Layout;
