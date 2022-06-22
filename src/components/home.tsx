import { DivWelcome } from "./Styled/div";
import paper from "../img/paper.png"
import { ImgPaper } from "./Styled/img";
import { Section } from "./Styled/section";
export function Home(){

    return(<>
<Section >
{/* style={{ backgroundImage:`url(${paper})` }} */}
<ImgPaper src={ paper } alt="burn old paper"/>
<DivWelcome>

  <h2>Welcome!</h2>
  <p>We have been waiting for you to arrive. 
  Please logg in, you will find username and password in the office.</p>
  <p>We have mush of our findings to show you</p>
  
 </DivWelcome>
</Section>
 
    </>)
}