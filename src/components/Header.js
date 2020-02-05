import React from "react";
import styled from "styled-components";
const StyledBanner = styled.div`
  background-color: #ccc;
  color: #fff;
  padding-bottom: 20px;
  min-height: 50px;
`;
export const Header = ({ siteTitle, siteDescription }) => (
  <StyledBanner>
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </StyledBanner>
);
