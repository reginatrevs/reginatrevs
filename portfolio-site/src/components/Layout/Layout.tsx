import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  className?: string;
}

const Main = styled.main`
  min-height: calc(100vh - 60px - 300px); /* Viewport height minus header and footer */
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<LayoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default Layout; 