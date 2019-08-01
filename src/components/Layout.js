import React from "react";
import styled from "styled-components";

export default Layout;

const Content = styled.div`
  margin: auto;
  padding: 10px;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 960px) {
    width: 900px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

const HeaderWrapper = styled.div`
  background-color: #fff;
`;

const Header = styled(Content)`
  display: flex;
`;

function Layout({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Header as="header">
          <img src="/logo.svg" alt="Apartment Butler" />
        </Header>
      </HeaderWrapper>
      <Content>{children}</Content>
    </>
  );
}
