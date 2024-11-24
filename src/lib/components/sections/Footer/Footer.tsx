import { ALink } from "lib/ui/ALink";
import { PRegular } from "lib/ui/PRegular";
import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components"


export default function () {
  return (
    <Contacts className="Section __border">
      <div className="left">
        <PRegular>Protects the player from 1 explosion. </PRegular>
        <TopicSection>vicimpa<span>@</span>ya.ru</TopicSection>
      </div>
      <div className="right">
        <ul>
          <li><ALink>telegram</ALink></li>
          <li><ALink>github</ALink></li>
          <li><ALink>vkontakte</ALink></li>
          <li><ALink>boosty</ALink></li>
        </ul>
      </div>
      <div className="bottom">
        <PRegular>2023 All Right reserved</PRegular>
      </div>
    </Contacts>
  )
}

const Contacts = styled.div`
  grid-template-areas: 
    "a b"
    "c c"
  ;
  
  .PRegular {
    opacity: 0.6;
  }

  &.__border {border-bottom: unset;}

  & > .left {
    grid-area: a;
    padding: var(--p);
    align-content: end;
    span {color:rgb(var(--red))}
    .PRegular {
      text-transform: uppercase;
    } 
  }

  & > .right {
    grid-area: b;
    align-content: end;
    padding: var(--p);
    ul {
      display:flex;
      width: 100%;
      justify-content: flex-end;
      gap: var(--p);

      .ALink {
        color: rgb(var(--gray-100));
        border-color: rgb(var(--gray-100));
        transition: 0.2s ease;
        &:hover, &:focus-visible, &:focus {
          color: rgb(var(--red));
          border-color: rgb(var(--red));
        }
      }
    }
  }
  & > .bottom {
    grid-area: c;
    border-top: 3px solid rgb(var(--gray-100));
    border-bottom: 3px solid rgb(var(--gray-100));
    padding: var(--p);
  }

  @media (max-width: 1400px) {
      .right > ul {
        max-width: 300px;
        flex-wrap: wrap;
        width: fit-content;
        margin-left: auto;
        margin-bottom: calc(var(--p) * 2);
      }
    }

    @media (max-width: 768px) {
      .right {
        border-top: 3px solid rgb(var(--gray-100));
        align-content: start;
        ul {
          max-width:unset;
          width: fit-content;
          margin-left:unset;
          justify-content: flex-start;
          margin-bottom: var(--p);
      }
      }
    }
`;
