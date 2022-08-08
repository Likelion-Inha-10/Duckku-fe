import styled, { css } from "styled-components";

const Margin = styled.div`
  height: ${(props) => props.size}px;

  ${(props) =>
    props.row &&
    css`
      height: 0;
      width: ${props.size}px;
    `}
`;

export default Margin;

/*사용법: 
<Margin size="50"/> : 세로 margin 50px
<Margin row size="50"/> : 가로 margin 50px
*/
