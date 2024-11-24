import { ALink } from "lib/ui/ALink";
import { PRegular } from "lib/ui/PRegular";
import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components";

import IMGLot_1 from "assets/imgs/Store/Lot_1.png";
import IMGLot_2 from "assets/imgs/Store/Lot_2.png";
import IMGLot_3 from "assets/imgs/Store/Lot_3.png";
import IMGLot_4 from "assets/imgs/Store/Lot_4.png";
import IMGLot_5 from "assets/imgs/Store/Lot_5.png";
import IMGLot_6 from "assets/imgs/Store/Lot_6.png";
import IMGLot_7 from "assets/imgs/Store/Lot_7.png";
import { H5 } from "lib/ui/H5";

const skins = [
  IMGLot_1,IMGLot_2,IMGLot_3,
  IMGLot_4,IMGLot_5,IMGLot_6,IMGLot_7
]

export default function () {
  return (
    <Store className="Section">
        <TopicSection>Store</TopicSection>
        <PRegular>
          <p>
            We plan to develop a launcher, additional game modes, 
            optimization and additional security measures for the OpenBomber project
          </p>
          <ALink>GO TO STORE</ALink>
        </PRegular>
        <div className="skins">
          {
            skins.map((url, index) => (
              <div className="skin">
                <img src={url} alt="" />
                <div className="skin_lowerbar">
                  <H5>Lot {index+1}</H5>
                  <span>soon</span>
                </div>
              </div>
            ))
          }
        </div>
    </Store>
  )
}


const Store = styled.div`
  grid-template-areas: 
    "a b"
    "c c"
  ;

  & > .PRegular {
    p { max-width: 420px;}
  }

  .skins {
    grid-area: c;
    width: 100%;
    display:grid;
    

    gap: 20px;
    padding: var(--p);

    .skin {
      max-width: 237px;
      margin: 0 auto;
      img {
        width: 100%;
        aspect-ratio: 2/2;
      }
      &_lowerbar {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 5px;
        span {
          font-size: clamp(14px,0.8367rem + 0.1633vw, 16px);
          line-height: 120%;
          color: rgb(var(--dark-800));
          opacity: 0.8;
        }
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(6, min(237px, 1fr));
      .skin:nth-child(1) {
        grid-column: 2;
        grid-row: 1;
      }
      .skin:nth-child(2) {
        grid-column: 3;
        grid-row: 1;
      }
      .skin:nth-child(3) {
        grid-column: 5;
        grid-row: 1;
      }
      .skin:nth-child(4) {
        grid-column: 6;
        grid-row: 1;
      }

      .skin:nth-child(5) {
        grid-column: 1;
        grid-row: 2;
      }
      .skin:nth-child(6) {
        grid-column: 2;
        grid-row: 2;
      }
      .skin:nth-child(7) {
        grid-column: 4;
        grid-row: 2;
      }
    }
    
    @media (min-width:768px) {
      grid-template-columns: repeat(4, 1fr);
      .skin:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
      }
      .skin:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
      }
      .skin:nth-child(3) {
        grid-column: 4;
        grid-row: 1;
      }
      .skin:nth-child(4) {
        grid-column: 2;
        grid-row: 2;
      }
      .skin:nth-child(5) {
        grid-column: 3;
        grid-row: 2;
      }
      .skin:nth-child(6) {
        grid-column: 1;
        grid-row: 3;
      }
      .skin:nth-child(7) {
        grid-column: 3;
        grid-row: 3;
      }
    }

    @media (max-width:768px){
      grid-template-columns: repeat(2, 1fr);
     
      .skin {
        max-width:unset;
        margin: unset;
        &_lowerbar {
          flex-direction: column;
        }
      }
    }
  }
`;