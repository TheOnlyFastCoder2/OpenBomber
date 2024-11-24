import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components"

export default function () {
  return (
    <Contacts className="Section __border">
      <TopicSection>CONTACTS</TopicSection>
    </Contacts>
  )
}

const Contacts = styled.div`
  grid-template-areas: 
    "a b"
    "c c"
  ;
  & > .TopicSection {border:unset}
  &.__border {border: unset;}
`;
