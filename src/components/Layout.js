import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import GlobalStyle from "./GlobalStyle";

const App = styled.main`
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;
export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <App>
      <GlobalStyle />
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </App>
  );
};
