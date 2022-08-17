const colors = {
  main: "linear-gradient(92.33deg, #7000FF 6.14%, #C15CFF 94.68%)",
  buttonInactive: "#D9D9D9",
  red: "#FD0000",
  gray: "#AFAFAF",
  blueGradation: "linear-gradient(180deg, #3448FF 0%, #5A6BFF 100%)",
  black: "#000000",
  noonToDusk: "linear-gradient(90deg, #EC7A85 0%, #C9E3F8 100%)",
  white: "#FFFFFF",
  purple: "#7000FF",
  headerText: "#1D1D1F",
  navGray: "#6D6D6D",
  darkGray: "#726969",
  buttonGray: "#7269692E",
  cardNumberGray: "#B8B4B4",
  btnGray: "#e5e4e4",
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
