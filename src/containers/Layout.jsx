import React from 'react';
import Navbar from '@components/Navbar/Navbar/Navbar';
import GlobalStyle from '@styles/GlobalStyle';

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
