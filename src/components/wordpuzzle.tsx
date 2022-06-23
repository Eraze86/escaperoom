import A from "../img/puzzle1/A.jpg"
import B from "../img/puzzle1/B.jpg"
import C from "../img/puzzle1/C.jpg"
import D from "../img/puzzle1/D.jpg"
import E from "../img/puzzle1/E.jpg"
import F from "../img/puzzle1/F.jpg"
import G from "../img/puzzle1/G.jpg"
import H from "../img/puzzle1/H.jpg"
import I from "../img/puzzle1/I.jpg"
import J from "../img/puzzle1/J.jpg"
import KX from "../img/puzzle1/KX.jpg"
import L from "../img/puzzle1/L.jpg"
import M from "../img/puzzle1/M.jpg"
import N from "../img/puzzle1/N.jpg"
import O from "../img/puzzle1/O.jpg"
import P from "../img/puzzle1/P.jpg"
import Q from "../img/puzzle1/Q.jpg"
import R from "../img/puzzle1/R.jpg"
import S from "../img/puzzle1/S.jpg"
import T from "../img/puzzle1/T.jpg"
import U from "../img/puzzle1/U.jpg"
import VW from "../img/puzzle1/VW.jpg"
import X from "../img/puzzle1/X.jpg"
import Y from "../img/puzzle1/Y.jpg"
import Z from "../img/puzzle1/Z.jpg"
import { DivPuzzleOne } from "./Styled/div"
import { ImgHier } from "./Styled/img"
import { Section } from "./Styled/section"


export function WordPuzzle(){
//to ides:
// one: is that user can move pictures, in to an container. if all of the pictures is in the right container u will get a clue
// two: is that user can move picture,in to an container. we some pictures allready are. it will become a word that is a other clue

  
    return(<>
    <Section>
    <DivPuzzleOne>
    <ImgHier src={ L } alt="hieroglyphics"/>
    <ImgHier src={ O } alt="hieroglyphics"/>
    <ImgHier src={ O } alt="hieroglyphics"/>
    <ImgHier src={ KX } alt="hieroglyphics"/>
    <ImgHier src={ B } alt="hieroglyphics"/>
    <ImgHier src={ E } alt="hieroglyphics"/>
    <ImgHier src={ H } alt="hieroglyphics"/>
    <ImgHier src={ I } alt="hieroglyphics"/>
    <ImgHier src={ N } alt="hieroglyphics"/>
    <ImgHier src={ D } alt="hieroglyphics"/>
    <ImgHier src={ T } alt="hieroglyphics"/>
    <ImgHier src={ H } alt="hieroglyphics"/>
    <ImgHier src={ E } alt="hieroglyphics"/>
    <ImgHier src={ T } alt="hieroglyphics"/>
    <ImgHier src={ VW } alt="hieroglyphics"/>
<br/>
    </DivPuzzleOne>
    <a href="/">Startpage</a><br/>
    <a href="/pyramidpuzzle">Pyramid Puzzle</a>
    </Section>

    Look behind the Tv
 
    </>)

}