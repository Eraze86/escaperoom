import styled from "styled-components";

export const StyledHeader = styled.header`
position: static;
color: white;
width: 100vw;
height: 10rem;

@media (min-width: 768px) {
    height: 20rem;
    }
`

export const ImgHeader = styled.img`
height: 15rem;
width: 100vw;
object-fit: cover;
position: relative;
z-index: -2;


@media (min-width: 768px) {
    height: 25rem;
    }`