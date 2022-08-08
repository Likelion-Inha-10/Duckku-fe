const colors = {
  main: "linear-gradient(92.33deg, #7000FF 6.14%, #C15CFF 94.68%)",
  buttonInactive: "#D9D9D9",
  red: "#FD0000",
  gray: "#726969",
  blueGradation: "linear-gradient(180deg, #3448FF 0%, #5A6BFF 100%);",
  black: "#000000;",
  noonToDusk: "linear-gradient(90deg, #EC7A85 0%, #C9E3F8 100%);",
};

const flex = {
  flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,

  flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
};

const theme = {
  colors,
  flex,
};

export default theme;
