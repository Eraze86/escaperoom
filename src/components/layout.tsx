import { Outlet } from "react-router-dom";
import { ImgHeader, StyledHeader } from "../components/Styled/header";
import sfinx from "../img/sfinx.jpeg"


export function Layout(){

    return(<>
    <StyledHeader>
    <ImgHeader src={ sfinx} alt="sfinx"/>
    
    </StyledHeader>
    <Outlet></Outlet>
   
    </>)
}