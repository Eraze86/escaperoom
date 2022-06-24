import starmap from "../img/Puzzle3/starsigns.jpg"
import { DivStarpage } from "./Styled/div"
import { ImgStars } from "./Styled/img"
import { Section } from "./Styled/section"

export function Stargaze(){

    return(<>
      <Section>
        <DivStarpage>
        </DivStarpage>
        <ImgStars src={ starmap } alt="Starsigns"/>
        
      <a href="/">Startpage</a><br/>
    <a href="/pyramidpuzzle">Pyramid Puzzle</a><br/>
    <a href="/wordpuzzle">Word puzzle</a>
    </Section>
    </>)
}