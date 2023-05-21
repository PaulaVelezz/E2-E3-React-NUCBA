import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';


const LayoutContainer = styled.div`
  height: auto;
  max-width: 1200px;
  min-height: 100vh;
`;

const ContentDinamicContainer = styled.div`
  height: calc(100vh - 120px);
`;


const Layout = ({ children }) => {
    return (
      <LayoutContainer>
        <Navbar />
        <ContentDinamicContainer>{children}</ContentDinamicContainer>
      </LayoutContainer>
    );
};

export default Layout;