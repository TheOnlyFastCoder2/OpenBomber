import styled from "styled-components";

export const ButtonSQBackets = styled.button`
  display: flex;
  gap: 10px;
  line-height: 140%;
  font-size: clamp(12px, 2vw, 20px);
  color: rgb(var(--dark-900), 0.5);
  user-select: none;
  span {
    line-height: 120%;
    color: rgb(var(--dark-900));
    transition: transfrom 0.2s ease;
    &:hover, &:focus-visible, &:focus {
     transform: scale(1.1);
    }
  }
`;