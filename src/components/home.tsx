import {  Section, SectionStart } from "./Styled/section";
import oldRoom from "../img/room1.jpg"
import { Article } from "./Styled/article";
import { ImgRooms } from "./Styled/img";
import { Link } from "react-router-dom";
export function Home(){

function goToPicture(){

}

    return(<>

   <SectionStart>
      <Article>
        <Link to="/"><ImgRooms src={ oldRoom } onClick={goToPicture} /></Link>
      </Article>
      <Article>
      <Link to="/"><ImgRooms src={ oldRoom } onClick={goToPicture} /></Link>
      </Article>  <Article>
      <Link to="/"><ImgRooms src={ oldRoom } onClick={goToPicture} /></Link>
      </Article>
    </SectionStart>
    </>)
}