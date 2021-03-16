import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';

const Header = styled.header`
  font-family: 'Raleway', sans-serif;
  position:absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  color:#fff;
  padding:35px 100px 0;

  @media(max-width:700px){
    &{
      flex-direction:column;
    }
  }
`;

const Company = styled.h2`
  text-transform: uppercase;
  @media(max-width:700px){
    &{
      margin-bottom:15px;
    }
  }
`;




export const CompanyHeader = () => {
  return(
      <Header>
        <Company>960Design</Company>
        <NavBar></NavBar>
      </Header>
  );
}