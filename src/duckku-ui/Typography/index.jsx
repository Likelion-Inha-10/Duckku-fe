import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.headerText};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;

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
    props.thin24 &&
    `
      font-family: 'Pretendard-Regular';
          font-size: 24px;
      `}

    ${(props) =>
    props.regular14 &&
    `
      font-family: 'Pretendard-Medium';
          font-size: 14px;
      `}

    ${(props) =>
    props.regular16 &&
    `
    font-family: 'Pretendard-Medium';
        font-size: 16px;
    `}

    ${(props) =>
    props.bold14 &&
    `
    font-family: 'Pretendard-Bold';
          font-size: 14px;
          `}

    ${(props) =>
    props.bold16 &&
    `
    font-family: 'Pretendard-Bold';
            font-size: 16px;
        `}

    ${(props) =>
    props.bold18 &&
    `
    font-family: 'Pretendard-Bold';
            font-size: 18px;
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

    ${(props) =>
    props.bold28 &&
    `
    font-family: 'Pretendard-Bold';
          font-size: 28px;
      `}

    ${(props) =>
    props.mainColor &&
    `
      background: linear-gradient(92.33deg, #7000FF 6.14%, #C15CFF 94.68%);
      -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
      `}
`;

export default withTheme(Typography);
