import pyramid from "../img/pussle2/pyramid.png"
import { ImgPyramid } from "./Styled/img"
import { Section } from "./Styled/section"

export function PyramidPuzzle(){


    return(<>
<Section>
     <ImgPyramid src={ pyramid } alt="Pyramid"/>
     <a href="/">Startpage</a><br/>
    <a href="/wordpuzzle">Word Puzzle</a><br/>

    </Section>
    </>)
}