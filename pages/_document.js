import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="강남셔츠룸 강남란제리 강남 셔츠 퍼블릭 송대표 인사드립니다. "
        />
        <meta
          name="keywords"
          content="강남 셔츠 퍼블릭 강남셔츠룸 강남란제리"
        />
        <meta name="author" content="송대표" />
        <meta
          property="og:title"
          content="강남 셔츠 퍼블릭 강남셔츠룸 강남란제리"
        />
        <meta
          property="og:description"
          content="강남 셔츠 퍼블릭 강남셔츠룸 강남란제리"
        />
        <meta
          property="og:image"
          content="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702306211220.png"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702306211220.png"
        />
        <meta name="twitter:title" content="azerc wa choonsim & A.I" />
        <meta
          name="twitter:description"
          content="강남 셔츠 퍼블릭 강남셔츠룸 강남란제리"
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/media/F-TRhUJbkAA4pxf?format=png&name=900x900"
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
