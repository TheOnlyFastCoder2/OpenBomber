import ButtonToPlay from "lib/ui/ButtonToPlay";
import { H3 } from "lib/ui/H3";
import styled from "styled-components";

export default function () {
  return (
    <Platforms>
      <H3>
        OpenBomber will be available on various platforms, including 
        Windows, Mac, Linux, iOS, Android, Xbox and Discord
      </H3>
      <ButtonToPlay/>
    </Platforms>
  )
}

const Platforms = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 578px;
  gap: 36px;
  padding: var(--p);
  text-align: center;

  h3 {
    max-width: 1175px;
  }
  .ButtonToPlay {
    width: min(100%, 492px);
    background-color: rgb(var(--light-900));
    padding: calc(var(--p) + 10px);
  }
`;