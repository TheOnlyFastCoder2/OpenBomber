import { useRef } from 'react';
import styled from 'styled-components';

import Navigation, {INavigation} from './Navigation';
import { ButtonSQBackets } from 'lib/ui/ButtonSQBackets';
import IMGLogo from 'assets/logo.png';
import IMGBackground from 'assets/background.png';

export default function () {
  const navigator = useRef<INavigation>() 
  
  return (
    <>
      <Header className="Header">
        <div className='Header_logo'>
          <img src={IMGLogo} alt="" />
        </div>
        <ButtonSQBackets onClick={() => navigator.current?.toOpen()} className='Header_btn'>
          [ <span>menu</span> ]
        </ButtonSQBackets>
        <Navigation bind={navigator} />
      </Header>
    </>
  )
}

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;
  top:0;
  position: sticky;

  z-index:99;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgb(var(--gray-100));
  border-bottom: unset;
  box-shadow:  0 3px   rgb(var(--gray-100));
  background-image: url(${IMGBackground});
  padding: 0 var(--p);

  .Header_logo {
    width: 234px;
    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 640px) {
      width: 120px;
    }
  }

  .Header_btn {
    
  }
`;
