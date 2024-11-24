import React from "react";
import styled from "styled-components";
import IMGCheck  from '../../../../assets/imgs/checkMark.png';
import IMGUncheck  from '../../../../assets/imgs/darkMark.png';

interface IProps {
  topic: string,
  mark: 'check'|'line',
  children: React.ReactNode,
}

export default function ({mark, topic, children}:IProps) {
  return (
    <List mark={mark} className="List"> 
      <h6>[ {topic} ]</h6>
      <ul>
        {children}
      </ul>
    </List>
  )
}

interface IMark {
  mark: 'check'|'line'
}

const List = styled.div<IMark>`
  padding: calc(var(--p) + 10px) var(--p);
  background-color: rgb(var(--light-800));
  display:flex;
  gap: clamp(66px, 10.641vw, 166px);
  flex-direction: column;
  justify-content: space-between;

  h6 {
    font-size: clamp(14px, 0.7985rem + 0.3265vw, 18px);
    line-height: 120%;
    color: rgb(var(--dark-800));
    font-family: 'Inter Sans';
    text-transform: lowercase;
  }

  ul > li {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(14px, 0.7985rem + 0.3265vw, 18px);
    padding: 10px clamp(4px, 0.1313rem + 0.5063vw, 10px) ;
    border-top: 1px solid rgb(var(--dark-900), 0.2);
    position: relative;
    &::after {
      content: "";
      min-width: 24px;
      height: ${({mark}) => mark === 'check' ? 18 : 6}px;
      display:block;
      background-image: url(${({mark}) => mark === 'check' ? IMGCheck : IMGUncheck });
      background-size: contain;
      background-repeat: no-repeat;
      text-wrap: pretty;
    }
  }
`;