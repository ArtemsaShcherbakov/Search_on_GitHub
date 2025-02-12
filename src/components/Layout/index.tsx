import { PropsWithChildren } from 'react';
import Header from '../Header';
import './style.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="layout">
      <div className="layout-container">{children}</div>
    </main>
  </>
);

export default Layout;
