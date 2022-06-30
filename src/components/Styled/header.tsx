import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
position: static;
color: white;
width: 100vw;
margin: 1rem;
text-align: center;
height: 10rem; 

@media (min-width: 768px) {
   
    }
`

export const Nav = styled.nav`

color: white;


@media (min-width: 768px) {
  
    }
`

export const Links= styled(Link)`

color: white;
margin: 1rem;

@media (min-width: 768px) {
  
    }
`