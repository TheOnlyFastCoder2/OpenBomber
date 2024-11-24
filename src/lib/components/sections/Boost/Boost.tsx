import { PRegular } from "lib/ui/PRegular";
import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components";
import BootItem from "./BootItem";
import items from "./items";


export default function () {
  return (
    <BoostSection className="Section __border">
      <TopicSection>
        <p>BOOST</p>
      </TopicSection>
      <PRegular>
       <p>
          In "OpenBomber" you move around the map, place bombs and collect bonuses. 
          Victory is achieved when you destroy all the other players on the map. 
          The game restarts if there are less than two players left on the map
       </p>
      </PRegular>
      <div className="boostItems">
          {items.map(({name, url, descriprion}, index) => (
            <BootItem
              name={name}
              index={"00"+(index+1)} 
              urlImg={url}>
             {descriprion}
            </BootItem>
          ))}
      </div>
    </BoostSection>
  )
}


const BoostSection = styled.div`
  padding-top:120px;
  border-top: 3px solid rgb(var(--gray-100));
  grid-template-areas: 
    "a b"
    "c c"
  ;

  & > .PRegular, .TopicSection {
    min-width: 100%;
    padding:  var(--p);
  }

  .TopicSection {
    grid-area:a;
    p {max-width: 130px}
  }

  & > .PRegular {
    grid-area: b;
    p { max-width: 523px;}
  }

  .boostItems {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-area: c;
    width: 100%;
    gap: var(--p);
    padding:  var(--p);
   
   .BoostItem {
      background-color: rgb(var(--light-800), 0.8);
      box-shadow: 0 0 1vw -0.8vh rgb(var(--dark-900), 0.4);
      padding:  var(--p);
   }
    .BoostItem:first-child {
      grid-row-start: 1;
      grid-row-end: 3;
    }

    @media (min-width: 1224px){
      .BoostItem:first-child, .BoostItem:nth-child(5) {
        justify-content: space-between;
        .wrapper {
          flex-direction: column;
          height: 100%;
        }
      }

      .BoostItem:nth-child(5) {
        grid-column: 3;
        grid-row-start: 2;
        grid-row-end:4;
      }
    }
    @media (max-width: 1224px) {
      grid-template-columns: repeat(2, 1fr);

      .BoostItem:first-child {
        grid-column-start:1;
        grid-column-end: 2;
      }

      .BoostItem:nth-child(4) {
        grid-column-start:1;
        grid-column-end: 3;
        .PRegular {
          max-width: 800px;
        }
      }
      .BoostItem:nth-child(6) {
        grid-column: 1;
        grid-row: 4;
      }
      .BoostItem:nth-child(5) {
        grid-column: 2;
        grid-row-start:4;
        grid-row-end:6;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      .BoostItem > .wrapper {
        height: 80px;
        .Img {width: 80px;}
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;