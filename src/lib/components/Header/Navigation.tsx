import { ButtonSQBackets } from 'lib/ui/ButtonSQBackets';
import ButtonToPlay from 'lib/ui/ButtonToPlay';
import React, { useEffect, useState  } from 'react';
import styled from 'styled-components';




export interface INavigation {
  toOpen:Function,
  toClose:Function;
}

interface IProps {
  bind: React.MutableRefObject<INavigation | undefined>
}

export default function  (props: IProps) {
  const [isShowed, setState] = useState(false);

  useEffect(() => {
    props.bind.current = {
      toOpen: () => {
        setState(true);
      },
      toClose: () => {
        setState(false);
      }
    }
  }, [])


  if(isShowed) {
    return (
      <Navigation>
        <div className="topbar">
          <ButtonSQBackets onClick={() => props.bind.current?.toClose()} className='close'>
            [ <span>X</span> ]
          </ButtonSQBackets>
        </div>
        <ul className="container __list">
          <li>about projects</li>
          <li>statics</li>
          <li>news</li>
          <li>store</li>
          <li>turnaments</li>
          <li>contacts</li>
        </ul>
        <div className="container __button">
          <ButtonToPlay/>
        </div>
      </Navigation>
    )
  }
  return <></>
}

const Navigation = styled.nav`
  position: absolute;
  right: 0;
  top:0;
  width: min(790px, 100%);
  min-height: 100%;
  background-color: rgb(var(--light-900));
  padding-top: 14px;
  padding-bottom:  20px;
  z-index: 99;

  @media (max-width: 768px) {
    min-height: 600px;
  }
  .topbar {
    display: flex;
    width: 100%;
    margin-bottom: 48px;
    padding: 0 var(--p);
    justify-content: flex-end;
  }

  .container {
    width: 100%;
    display:flex;
    padding: 0 90px;

    @media (max-width: 640px) {
      padding: 0 20px;
    }
  }

  .container.__list {
    flex-direction: column;
    list-style-type:none;
    li {
      padding: 30px 0;
      line-height: 120%;
      color: rgb(var(--dark-900));
      text-transform: uppercase;
      font-size: clamp(20px,1.0587rem + 0.8163vw,30px);
      cursor: pointer;
      transition: 0.2s ease;
      user-select: none;
      &:not(:last-child) {
        border-bottom: 1px solid rgb(var(--gray-100));
      }
      &.disable, &:hover,  &:focus-visible, &:focus {
        opacity: 0.2;
      }
    }
  }

  .container.__button {
    margin-top: 39px;
    .ButtonToPlay {
      border-top: 1px solid rgb(var(--dark-900));
    }
  }
`;