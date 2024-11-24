import styled from "styled-components";

export const TopicSection = styled.h2`
  color: rgb(var(--drak-800));
  font-size: clamp(23px,0.6378rem + 2.6122vw,52px);
  line-height: 120%;
  max-width: 375px;
  
`;

TopicSection.defaultProps = {
  className: 'TopicSection',
}