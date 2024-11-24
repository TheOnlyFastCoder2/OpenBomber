import styled from "styled-components"

interface IProps {
  qnty: number,
  children: React.ReactNode
}

export default function (props:IProps) {
  return (
    <Feature className="Feature">
      <div className="topbar">
        {[1,2,3,4].map((_, index) => {
          return <span className={index < props.qnty ? 'active': ''}/>
        })}
      </div>
      <p>{props.children}</p>
    </Feature> 
  )
} 
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: min(100%, 350px);
  padding: 30px 30px 26px 30px;
  background-color: rgb(var(--light-800));
  border-bottom: 3px solid rgb(var(--dark-900));

  .topbar {
    display: flex;
    gap: 2px;

    span {
      width: block;
      width: 12px;
      aspect-ratio: 2/2;
      opacity: 0.3;
      background-color: rgb(var(--red));
      &.active {
        opacity: 1;
      }
    }
  }

  p {
    max-width: 264px;
    color: rgb(var(--dark-800));
    line-height: 120%;
    text-transform: uppercase;
    font-size: clamp(16px, 0.8469rem + 0.6531vw, 24px);
  }

  @media (max-width: 1024px){
    padding: 10px 10px 18px 10px;
    .topbar span {
      width: 6px;
    }
  }
`;