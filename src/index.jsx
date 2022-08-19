import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./assets/theme";
import reportWebVitals from "./reportWebVitals";
import Router from "./routes";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, #root {
        height: 100%;
    }

    @font-face {
        font-family: 'Pretendard-Light';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        font-family: 'Pretendard-Regular';
        outline: none;
        margin: 0;
        padding: 0;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
