import { Div, DivWelcome } from "./Styled/div";
import paper from "../img/paper.png"
import { ImgPaper } from "./Styled/img";
import { Section } from "./Styled/section";
import { useEffect, useState } from "react";
export function Home(){

  const [notLoggedIn, setNotLoggedIn] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)


  useEffect(()=>{
    let getUser = localStorage.getItem("user")
 if(getUser=== "1"){
    setNotLoggedIn(false)
    setLoggedIn(true)
  }console.error("error")
  },[])
 

    return(<>
<Section >

{notLoggedIn && <><ImgPaper src={ paper } alt="burn old paper"/>
<DivWelcome>

  <h2>Welcome!</h2>
  <p>We have been waiting for you to arrive. 
  Please logg in, you will find username and password in the office.</p>
  <p>We have mush of our findings to show you</p>
  
 </DivWelcome></>}
 {loggedIn && <><Div>
 There you are, its about time. We have found many pussles when we explored the pyramids. Maybe you can solve some of them?
 God knows we have tried!
 Good luck!

 <a href="/wordpuzzle">Ord Pussel</a><a href="/pyramidpuzzle">Pyramid Pussel</a>
 </Div>
 </>}
</Section>
 
    </>)
}