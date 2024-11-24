import { H3 } from "lib/ui/H3";
import { Img } from "lib/ui/Img";
import styled from "styled-components";

import IMGSkin_1 from 'assets/imgs/skin_1.png';
import IMGSkin_2 from 'assets/imgs/skin_2.png';
import IMGSkin_3 from 'assets/imgs/skin_3.png';
import IMGMap from 'assets/imgs/map.png';

export default function () {
  return (
    <Victory>
      <div className="left">
        <H3>
          <span>Victory <br/> is achieved</span> when you destroy all the other players on the map
        </H3>
      </div>
      <div className="right">
        <div className="container">
          <Img url={IMGSkin_1}/>
          <Img url={IMGSkin_2}/>
          <Img url={IMGSkin_3}/>
          <Img url={IMGSkin_2}/>
        </div>
        <Img url={IMGMap}/>
      </div>
    </Victory>
  );
}

const Victory = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 29%;
  gap: 20px;
  padding-top: 120px;
  padding-right: 20px;
  padding-left: 13%;
  overflow: hidden;
  .left {
    width: fit-content;
    height: fit-content;
    

    h3 {
      max-width: 729px;
      position: relative;
    }
  }

  .right {
    width: 339px; //25.5%;
    height: 100%;
    min-width: 220px;
    & > .Img {
      width: 100%;
      aspect-ratio: 2/2;
    }

    .container {
      width: 100%;
      height: 100%;
      position: absolute;
      left:0;

      .Img {
        position: absolute;
        width: 8.9%;
        aspect-ratio: 2/2;

        &:nth-child(1) {
          left:0;
          top:0;
        }

        &:nth-child(2) {
          left:13%;
          top:37%;
        }

        &:nth-child(3) {
          left:39%;
          top:37%;
        }

        &:nth-child(4) {
          left:calc(39% + 160px);
          top:51.5%
        }
      }
    }
  }

  @media (max-width: 910px) {
    padding-left:93px;

    .left {
      h3 {
        max-width: 383px;
        font-size: 20px;
      }
    }
    .right {
      max-width: 240px;
      .container .Img { 
        width: 84px;
        
        &:nth-child(2) {
          left:12.5%;
          top:28.5%;
        }

    
        &:nth-child(3) {
          left:37.8%;
          top:28.5%;
        }

          &:nth-child(4) {
            left:calc(49.5% + 5px);
            top:calc(44.5% + 5px);
          }
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    flex-direction: column;
    padding-left: 10px;

   .left h3 {
      max-width: 729px;
      font-size: clamp(20px, 0.9056rem + 1.4694vw, 38px);
    }

    .right {
      display: flex;
      min-width: 100%;
      justify-content: space-between;

      .container {
        display: flex;
        position: relative;
        
        gap: 10px;
        .Img {
          &:nth-child(1) {display:none}
          &:nth-child(4) {display:none}
          &:nth-child(2), &:nth-child(3){
            position: relative;
            left:0;
            top:0;
            width: 45.5%;
            min-width: 60px;
            aspect-ratio: 2/2;
          }
        }
      }
    }
  }
`;
