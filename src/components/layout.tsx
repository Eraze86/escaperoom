import { ChangeEvent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ImgHeader, StyledHeader } from "../components/Styled/header";
import sfinx from "../img/sfinx.jpeg"
import { IUsers } from "../interface/IUsers";
import { Button } from "./Styled/button";
import { StyledForm } from "./Styled/form";
import { useNavigate } from "react-router-dom";

export function Layout(){
    useEffect(()=>{
        let getUser = localStorage.getItem("user")
     if(getUser=== "1"){
        setStartHeader(false)
        setChangeHeader(true)
      }
      },[])


const nav = useNavigate();
const [user, setUser] = useState<IUsers>({
    userName: "",
    passWord: "",
})
const [startHeader, setStartHeader] = useState(true)
const [changeHeader, setChangeHeader] = useState(false)

function handleUser(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name
    let uppdate = ({...user, [name]: e.target.value})
    setUser(uppdate)
}
function loggIn(){
if(user.userName === "admin" && user.passWord === "admin"){
    window.location.reload();
    setStartHeader(false)
    setChangeHeader(true)
    localStorage.setItem("user", "1")
    
}
}



    return(<>
    {startHeader && 
    <StyledHeader>
    <ImgHeader src={ sfinx} alt="sfinx"/>
    <StyledForm>
    <input type="text" name="userName" value={user.userName} onChange={handleUser}/>
    <input type="text" name="passWord"value={user.passWord} onChange={handleUser}/>
    <Button onClick={loggIn}>Logga in</Button>
    </StyledForm>
   
    </StyledHeader>}

    {changeHeader && 
    <StyledHeader>
    <ImgHeader src={ sfinx} alt="sfinx"/>
    <StyledForm>
    <p>Escape room <br/>The mystery of the hidden tombs</p>
    </StyledForm>
    </StyledHeader> }
    <Outlet></Outlet>
   
    </>)
}

