import {   SectionStart } from "./Styled/section";
import oldRoom from "../img/room1.jpg"
import apartment from "../img/room2.png"
import flowerRoom from "../img/room3.jpg"
import { Article } from "./Styled/article";
import { ImgRooms } from "./Styled/img";

import { LinkRoom } from "./Styled/links";
export function Home(){

function goToPicture(){

}

    return(<>

   <SectionStart>
      <Article>
        <LinkRoom to="/room1"><ImgRooms src={ oldRoom }  /></LinkRoom>
      </Article>
      <Article>
      <LinkRoom to="/room2"><ImgRooms src={ apartment} /></LinkRoom>
      </Article>  <Article>
      <LinkRoom to="/room3"><ImgRooms src={ flowerRoom }  /></LinkRoom>
      </Article>
    </SectionStart>
    </>)
}