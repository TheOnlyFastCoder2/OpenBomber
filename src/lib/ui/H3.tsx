import styled from "styled-components";

export const H3 = styled.h3`
  font-size: clamp(20px, 0.9056rem + 1.4694vw, 38px);
  color: rgb(var(--dark-900));
  line-height: 140%;
  text-transform: uppercase;
  span {
    color: rgb(var(--red))
  }
`;