import styled from "styled-components";
import IMGArrowsPlay from 'assets/imgs/arrows.png';

export default function () {
  return (
    <ButtonToPlay className="ButtonToPlay">
      <span>play now</span> 
      <img src={IMGArrowsPlay} alt=''/>
    </ButtonToPlay>
  )
}

const ButtonToPlay= styled.button`
  width: 100%;
  display: flex; 
  padding-top: 20px;
  justify-content: space-between;
  font-size: clamp(18px,1vw,20px);
  line-height: 140%;
  color: rgb(var(--dark-900));
  transition: 0.2s ease;
  text-transform: uppercase;
  &:hover {
    color: rgb(var(--dark-900), 0.2);
  }
`;