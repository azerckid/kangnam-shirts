import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #eee;
    background-color: #000;
    font-family: "Pretendard Variable", Pretendard;
  }
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
