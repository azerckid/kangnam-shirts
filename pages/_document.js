import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="강남셔츠룸 강남란제리 강남 셔츠 퍼블릭 송대표 인사드립니다.
          강남셔츠룸은 기존의 퍼블릭 룸싸롱이나 가라오케 시스템과는 다른 좀더 적극적인 매니저들의 복장과
          마인드가 장점인 룸싸롱 입니다. 매니저들이 셔츠만 입어서 강남 셔츠룸이라고 불립니다."
        />
        <meta
          name="keywords"
          content="강남 셔츠 퍼블릭 강남셔츠룸 강남란제리"
        />
        <meta name="author" content="강남 퍼블릭 셔츠 셔츠룸 송대표" />
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
        {/* <link rel="canonical" href="https://kangnam.site" /> */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <title>강남셔츠룸 강남란제리 송대표</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
