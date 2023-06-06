import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';


const LayoutContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ContentDinamicContainer = styled.div`
  height: 100vh;
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