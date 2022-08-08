import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};

  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  text-overflow: ellipsis;
  overflow: hidden;

  ${(props) =>
    props.center &&
    `
      text-align: center;
    `}

  ${(props) =>
    props.underline &&
    `
      text-decoration: underline;
    `}

  ${(props) =>
    props.inline &&
    `
      display : inline-block;
    `}
`;

export default withTheme(Typography);
