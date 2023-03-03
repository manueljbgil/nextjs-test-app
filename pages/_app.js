import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Nanum-Regular';
    src: url('/fonts/NanumMyeongjo-Regular.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Nanum-Bold';
    src: url('/fonts/NanumMyeongjo-Bold.ttf') format('ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  /* @font-face {
    font-family: 'Hind-Light';
    src: url('/fonts/HindSiliguri-Light.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Hind-Medium';
    src: url('/fonts/HindSiliguri-Medium.ttf') format('ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  } */
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
