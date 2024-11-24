import styled from "styled-components";
import IMGHero from '../../../assets/imgs/Hero.png';
import SVGArrow from "assets/svg/SVGArrow";
import { H3 } from "lib/ui/H3";
import { Img } from "lib/ui/Img";

export default function () {
  return (
    <Hero id="Hero">
      <Topic>openBomber</Topic>
      <div className="container">
        <Img className="left" url={IMGHero}>
          <PlayVideo>
              <button>
                  <SVGArrow/>
              </button>
              <h3>WATCH VIDEO</h3>
          </PlayVideo>
        </Img>
        <div className="right">
          <article>
            <H3>Blast to the Past: NES Classic Revived with Multiplayer Mayhem</H3>
            <p>Discover the multiplayer version of the classic, where you can throw a bomb, team up with friends, and fight for victory on a shared map. Pick up bonuses, blow up blocks and prove that you are a real champion!</p>
          </article>
        </div>
      </div>
    </Hero>
  )
}

const PlayVideo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  h3 {
    width: 140px;
    color: rgb(var(--light-900));
    font-size: clamp(20px,  1.1352rem + 0.4898vw, 26px);
    line-height: 140%;
    text-shadow: 0 4px rgb(var(--dark-900));
  }

  button {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 13.2%;
    min-width: 64px;
    /* position: relative; */
    background-color: rgb(var(--light-900));
    aspect-ratio: 2/2;
  
    &:hover {
      svg {
        transform: scale(1.2);
   
      }
    }
    svg {
      width: 30%;
      transition: transform 0.2s ease;
      path {fill: rgb(var(--red))}
    }
  }

  @media screen and (max-width: 768px){
      button svg path{
        fill: rgb(var(--dark-800))
    }
  }
`;

const Topic = styled.h1`
  color: rgb(var(--red));
  font-size: clamp(20px,  -0.6rem + 10.1224vw, 140px);
  padding: 22px 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Hero = styled.div`
  width: 100%;
  
  & > .container {
    display:flex;
    gap: 20px;
    justify-content: space-between;
    border-top: 3px solid rgb(var(--gray-100));

    & > .left {
      display: flex;
      align-items: flex-end;
      position: relative;
      padding: calc(var(--p) + 10px);
      width: 51.35%;
      max-height: 608px;
      height: 608px;
    }

    & > .right {
      width: 47.56%;
      article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 20px var(--p);
        gap: 40px;
        
        h3 {max-width: 621px}
        p {
          font-size: clamp(14px, 0.7985rem + 0.3265vw, 18px);
          color: rgb(var(--dark-900));
          line-height: 140%;
        }
      }
    }


    
    @media screen and (max-width: 768px){
      flex-direction: column;
      .left,.right {width: 100%;}
      .left {height: 300px;}
    } 
  }
`;