import Header from 'lib/components/Header/Header';
import Hero from 'lib/components/Header/Hero';
import AboutProjects from 'lib/components/sections/AboutProjects/AboutProjects';
import Boost from 'lib/components/sections/Boost/Boost';
import Contacts from 'lib/components/sections/Contacts/Contacts';
import Footer from 'lib/components/sections/Footer/Footer';
import News from 'lib/components/sections/News/News';
import OurGoals from 'lib/components/sections/OurGoals/OurGoals';
import Platforms from 'lib/components/sections/Platforms/Platforms';
import Store from 'lib/components/sections/Store/Store';
import Victory from 'lib/components/sections/Victory/Victory';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // устронаяю баг на мобильных устройствах, из-за того что header имеет stickly
    // контейнер вычитает высоту header, поэтому не корректно отображает на моб устройтсвах
    const isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod|Android/i) != null;
    if(isMobileDevice) {
      setOffset(60);
    }
  }, []);
  return (
    <>
    <ScrollBar>
      <Header/>
      <Container style={{paddingBottom:offset+'px'}}>
        <Hero/>
        <AboutProjects/>
        <Victory/>
        <OurGoals/>
        <Boost/>
        <Platforms/>
        <Store/>
        <News/>
        <Contacts/>
        <Footer/>
      </Container>
    </ScrollBar>
    
    </>
  )
}

export default App;

const ScrollBar = styled.div`
  overflow: scroll;
  height: 100vh;
  padding-right: calc(var(--p) / 2);

  /* WebKit */
  --width: 6px;
  &::-webkit-scrollbar {
    width: var(--width);
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(var(--dark-900), 0.7);
    cursor: grab;
  }

  &::-moz-scrollbar {
    width: var(--width);
  }

  &::-moz-scrollbar-thumb {
    background: rgb(var(--dark-900), 0.7);
    cursor: grab;
  }

  /* IE и Edge (частично, стилизация ограничена) */
  &::-ms-scrollbar {
      width: var(--width);
  }

  &::-ms-scrollbar-thumb {
      background: rgb(var(--dark-900), 0.7);
      cursor: grab;
  }

`
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  border: 3px solid rgb(var(--gray-100));
`;