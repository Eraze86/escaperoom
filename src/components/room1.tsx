import { SectionRoom1 } from "./Styled/section"
import oldRoom from "../img/room1.jpg"
import { ImgOldRoom } from "./Styled/img"
import { R1T1 } from "./Styled/div"
import { useState } from "react"
export function Room1(){
    const [coords, setCoords] = useState({x: 0, y: 0})

   function handleMouseMove(e: any){
        setCoords({
          x: e.clientX - e.target.offsetLeft,
          y: e.clientY - e.target.offsetTop,
          //Have to get this in the onmouseevent to get the right cords when windows is resized,
          //so the right item is getting clicked :), WIP
        //   width: 90vw; 
        //   hight: 100vw;
        });
      };
      console.log(coords)

    return(<>
    <SectionRoom1 onMouseMove={handleMouseMove}>
        <ImgOldRoom src={oldRoom}/>
        <R1T1></R1T1>


    </SectionRoom1>
    </>)
}
