import { Img } from "lib/ui/Img";
import { PRegular } from "lib/ui/PRegular";
import styled from "styled-components";

interface IProps {
  urlImg: string,
  name: string,
  index: number|string,
  children: string,
}

export default function ({name, index, urlImg, children}:IProps) {
  return (
    <BoostItem className="BoostItem">
      <div className="wrapper">
        <Img url={urlImg}/>
        <div className="container">
          <PRegular>[ {index} ]</PRegular>
          <h4>{name}</h4>
        </div>
      </div>
      <PRegular>
        {children}
      </PRegular>
    </BoostItem>
  )
}

const BoostItem = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  height: 100%;

  & > .wrapper {
    display:flex;
    gap: var(--p);
    height: 99px;
    margin-bottom: 16px;
    .Img {
      width: 99px;
      aspect-ratio: 2/2;
      background-size: contain;
      background-position: top left;
    }

    & > .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .PRegular {
        color: rgb(var(--dark-900), 0.3)
      }
    }
  }
`;