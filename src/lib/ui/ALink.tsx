import styled from "styled-components";

export const ALink = styled.a`
  width: fit-content;
  color: rgb(var(--red));
  font-family: 'Pixel Sans';
  text-decoration: none;
  border-bottom: 3px solid rgb(var(--red));
  padding-bottom: 5px;
  font-size:  clamp(14px, 0.7985rem + 0.3265vw, 18px);
  cursor: pointer;
  
  &:hover {
    color: rgb(var(--red));
    border-color: rgb(var(--red));
    transition: 0.2s ease;
    &:hover, &:focus-visible, &:focus {
      color: rgb(var(--gray-100));
      border-color: rgb(var(--gray-100));
    }
  }
`;


ALink.defaultProps = {
  className: 'ALink'
}