import styled from "styled-components";

interface IProps { 
  url: string,
}

export const Img = styled.div<IProps>`
  background-image:  url(${(props) => props.url });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

Img.defaultProps = {
  className: 'Img',
};