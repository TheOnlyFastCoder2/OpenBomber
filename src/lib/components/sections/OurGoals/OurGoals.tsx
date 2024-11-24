import { PRegular } from "lib/ui/PRegular";
import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components";
import List from "./List";

export default function () {
  return (
    <OurGoals className="Section">
      <TopicSection>
        <p>Our Goals</p>
      </TopicSection>
      <PRegular>
       <p>
       We plan to develop a launcher, additional game modes, optimization and additional security measures for the OpenBomber project
       </p>
      </PRegular>
      <List mark="check" topic="implemented">
        <li>client and server</li>
        <li>statistics</li>
        <li>settings</li>
        <li>choosing skins</li>
      </List>
      <List mark="line" topic="our plans">
        <li>include a launcher</li>
        <li>a skin store</li>
        <li>tournaments</li>
        <li>support for various gaming platforms</li>
      </List>
    </OurGoals>
  )
}


const OurGoals = styled.div`
  grid-template-areas: 
    "a b"
    "c d"
  ;

  &:nth-child(2) {grid-area: c;}
  &:nth-child(3) {grid-area: d;}
  .List {margin: var(--p);}

  @media screen and (max-width: 768px) {
    .TopicSection {
      border-bottom:none;
      p {max-width: 130px}
    }
    
    .PRegular {
      border-bottom: 3px solid rgb(var(--gray-100));
      p { max-width: 480px;}
    }
  }
`;