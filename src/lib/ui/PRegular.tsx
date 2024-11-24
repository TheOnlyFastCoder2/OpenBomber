import styled from "styled-components";

export const PRegular = styled.p`
  &, & > * {
    font-family: 'Inter Sans';
    font-size: clamp(14px, 0.7985rem + 0.3265vw, 18px);
    line-height: 120%;
    text-wrap: pretty; 
  }
`;

PRegular.defaultProps = {
  className: 'PRegular',
}