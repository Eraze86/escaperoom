import pyramid from "../img/pussle2/pyramid.png"
import pyramidP from "../img/pussle2/pyramidgame.png"
import { DivPyramid } from "./Styled/div"
import { ImgPGame, ImgPyramid } from "./Styled/img"
import { Section } from "./Styled/section"

export function PyramidPuzzle(){


    return(<>
<Section>
     <DivPyramid>
        <div>

        </div>
        <ImgPyramid src={ pyramid } alt="Pyramid"/>
        <ImgPGame src={ pyramidP } alt="Pyramidpuzzle"/><br/>
     </DivPyramid>
 
    <a href="/">Startpage</a><br/>
    <a href="/wordpuzzle">Word Puzzle</a><br/>
    <a href="/stargaze">Stars</a>

    </Section>
    </>)
}