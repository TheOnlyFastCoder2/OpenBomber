import styled from "styled-components";
import { TopicSection } from "lib/ui/TopicSection";
import { PRegular } from "lib/ui/PRegular";
import User from "./User";
import Feature from "./Feature";

export default function () {
  return (
    <AboutProject className="Section __border">
      <TopicSection>
        <p>ABOUT PROJECT</p>
      </TopicSection>
      <PRegular>
        <p>
          OpenBomber is an exciting incarnation of the legendary NES game with new features. 
          The experience of multiplayer battles, cross-platform play and social interactions awaits you here. 
          Embark on a virtual adventure where you will place bombs, destroy blocks and compete with other players on a shared map.
        </p>
      </PRegular>
      <div className="features">
        <Feature qnty={1}>cross-platform</Feature>
        <Feature qnty={2}>multiplayer</Feature>
        <Feature qnty={3}>skins</Feature>
        <Feature qnty={4}>turnaments</Feature>
      </div>
     
      <User />
    </AboutProject>
  )
}

const AboutProject = styled.div`
  display:grid;
  grid-template-areas: 
    "a b"
    "c d"
  ;

  .User {grid-area: d;}

  .features {
    grid-area: c;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: var(--p);
    border-right: 3px solid rgb(var(--gray-100));

    .Feature {
      max-width: 355px;
      max-height: 271px;
    }

    @media (max-width: 1024px){
      gap: 8px;
      display: flex;
      padding: 10px 9px;
      flex-direction: column;

      .Feature {
        min-width: 100%;
      }
    }
  }

  @media (max-width: 768px){
      display: flex;
      flex-direction: column; 
      .features {
        border-right:none;
      }
  }
`;

