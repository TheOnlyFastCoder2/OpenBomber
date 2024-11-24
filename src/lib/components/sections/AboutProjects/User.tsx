import styled from "styled-components";
import IMGHero from '../../../../assets/imgs/Hero.png';
import ButtonToPlay from "lib/ui/ButtonToPlay";
import { Img } from "lib/ui/Img";

export default function() {
  return (
    <User className="User">
      <Container>
        <Img url={IMGHero} className="picture"/>
        <Wrapper>
            <h4>k1llBomber</h4>
            <ul>
              <li>kill <span>328</span></li>
              <li>win <span>127</span></li>
              <li>death <span>221</span></li>
              <li>rating <span>#205</span></li>
            </ul>
        </Wrapper>
      </Container>
      <ButtonToPlay/>
    </User>
  )
}

const Wrapper = styled.div`
  display:flex;
  width: 47%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
      max-width: 174px;
    }
  h4 {
    text-transform: uppercase;
    font-size: clamp(12px, 0.5204rem + 0.9796vw, 24px) ;
    line-height: 140%;
    color: rgb(var(--dark-800));
  }

  ul {
    display: block;
    list-style-type: none;
    text-transform: uppercase;

    li {
      display:flex;
      justify-content: space-between;
      padding: 10px 0;
      line-height: 140%;
      font-size: clamp(12px,0.6352rem + 0.4898vw, 18px);
      color: rgb(var(--dark-800));
      &:not(:last-child) {
        border-bottom: 1px solid rgb(var(--dark-900));
      }

      span {
        color: rgb(var(--red));
      }
    }
  }
`;

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  gap: var(--p);
  padding:var(--p);
  height: 512px;

  @media (max-width: 1024px) {
    height: 244px;
  }
`;

const User = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  .ButtonToPlay {
    padding: var(--p);
    margin-top: 10px;
    border-top: 3px solid rgb(var(--gray-100));
  }

  .picture {
    width: 53%;
    height: 100%;
  
    @media (max-width: 768px){
      max-width: 167px;
    }
  }
`;

