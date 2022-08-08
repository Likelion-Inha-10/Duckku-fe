import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.headerText};
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

    ${(props) =>
    props.thin14 &&
    `
    font-family: 'Pretendard-Regular';
        font-size: 14px;
        `}

    ${(props) =>
    props.thin16 &&
    `
    font-family: 'Pretendard-Regular';
        font-size: 16px;
    `}

    ${(props) =>
    props.thin18 &&
    `
    font-family: 'Pretendard-Regular';
        font-size: 18px;
    `}

    ${(props) =>
    props.thin21 &&
    `
    font-family: 'Pretendard-Regular';
        font-size: 21px;
    `}

    ${(props) =>
    props.regular16 &&
    `
    font-family: 'Pretendard-Medium';
        font-size: 16px;
    `}

    ${(props) =>
    props.bold16 &&
    `
    font-family: 'Pretendard-Bold';
            font-size: 16px;
        `}

    ${(props) =>
    props.bold21 &&
    `
    font-family: 'Pretendard-Bold';
        font-size: 21px;
        `}

    ${(props) =>
    props.bold24 &&
    `
    font-family: 'Pretendard-Bold';
        font-size: 24px;
    `}
`;

export default withTheme(Typography);
