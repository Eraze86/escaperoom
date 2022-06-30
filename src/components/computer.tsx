import { Div } from "./Styled/div";
import { Section, SectionStart } from "./Styled/section";
import { useEffect, useState } from "react";
export function Home(){

  const [notLoggedIn, setNotLoggedIn] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{

    let getUser = localStorage.getItem("user")
 if(getUser=== "1"){

    setNotLoggedIn(false)
    setLoggedIn(true)

  }
  },[])


    return(<>
<Section >

{notLoggedIn && <>
<SectionStart>

  <h2>Welcome!</h2>
  <p>We have been waiting for you to arrive. 
  Please logg in, you will find username and password in the office.</p>
  <p>We have findings that we must show you</p>
  
 </SectionStart></>}
 {loggedIn && <>

  <Div>
 There you are, its about time. We found many puzzles when we where exploring the pyramids. Maybe you can solve some of them?
 God knows we have tried!
 Good luck!
<br/>
<a href="/wordpuzzle">Word Puzzle</a><br/>
<a href="/pyramidpuzzle">Pyramid Puzzle</a><br/>
<a href="/stargaze">Stars</a>
 </Div>
 </>}
</Section>
 
    </>)
}