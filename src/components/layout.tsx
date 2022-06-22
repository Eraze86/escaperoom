import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Outlet } from "react-router-dom";
import { ImgHeader, StyledHeader } from "../components/Styled/header";
import sfinx from "../img/sfinx.jpeg"
import { IUsers } from "../interface/IUsers";
import { Button } from "./Styled/button";
import { StyledForm } from "./Styled/form";

export function Layout(){

const [user, setUser] = useState<IUsers>({
    userName: "",
    passWord: "",
})
function handleUser(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name
    let uppdate = ({...user, [name]: e.target.value})
    setUser(uppdate)
}


    return(<>
    <StyledHeader>
    <ImgHeader src={ sfinx} alt="sfinx"/>
    <StyledForm>
    <input type="text" name="userName" value={user.userName} onChange={handleUser}/>
    <input type="text" name="passWord"value={user.passWord} onChange={handleUser}/>
    <Button>Logga in</Button>
    </StyledForm>
    </StyledHeader>
    <Outlet></Outlet>
   
    </>)
}

