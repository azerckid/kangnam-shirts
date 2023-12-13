import Center from "@/components/Center";
import Footer from "@/components/Footer";
import GridUnit from "@/components/GridUnit";
import GridWrapper from "@/components/GridWrapper";
import Header from "@/components/Header";
import Link from "next/link";
import styled from "styled-components";

import { FaXTwitter } from "react-icons/fa6";

const Background = styled.div`
  background-color: #000;
  padding: 1rem;
  color: #fff;
`;
const TwitterLink = styled(Link)`
  color: #1da1f2; // Twitter's brand color
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 1rem;
  display: inline-flex; // To align icon and text
  align-items: center; // Center align icon and text
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
const Introduction = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #aaa;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    padding: 0 1rem;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: #999;
    @media screen and (min-width: 768px) {
      padding: 0 6rem;
      font-size: 1.1rem;
    }
  }
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Description = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #666;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <Center>
        <TwitterLink
          href="https://twitter.com/azerckid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
          <span style={{ marginLeft: "0.5rem" }}>
            강남 셔츠룸 송대표가 최선을 다해 모시겠습니다.
          </span>
        </TwitterLink>
        <Introduction>
          <h1>강남셔츠룸</h1>
          <p>
            셔츠룸은 일종의 룸 서비스로, 가라오케나 룸처럼 노래나 게임을 즐기는
            시스템과는 다릅니다. 대신 고급스런 인테리어와 함께 퀄리티 높은
            매니저가 함께 해드리며, 테이블에서 간단한 호구조사와 함께 술 한
            잔하며 즐길 수 있는 곳입니다. 강남의 셔츠룸 시스템은 전국적으로
            전파되어 제주도에서도 강남셔츠룸이 인기가 있습니다 기존의 퍼블릭
            룸싸롱이나 가라오케 시스템과는 다른 좀더 적극적인 매니저들의 복장과
            마인드가 장점인 룸싸롱 입니다 매니저들의 옷차림은 홀복이 아닌 셔츠를
            입어서 강남 셔츠룸이라고 불리 웁니다. 매니저와 전화번호를 주고 받고
            사적으로 연락을 하며 애인사이가 되어 연애를 하시길 바랍니다. 강남
            셔츠룸은 일종의 룸 서비스로, 가라오케나 룸처럼 노래나 게임을 즐기는
            시스템과는 다릅니다. 대신 고급스런 인테리어와 함께 퀄리티 높은
            매니저가 함께 해드리며, 테이블에서 간단한 호구조사와 함께 술 한
            잔하며 즐길 수 있는 곳입니다. 강남 셔츠룸의 매니져들을 아래 그림으로
            대략 소개드립니다.
          </p>
        </Introduction>
        <GridWrapper>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702306211220.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 하련</Title>
            <Description>귀염상 술또라이 사카가능</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308728829.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 효린</Title>
            <Description>실장님 새끼 룸뜨억 가능</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308713351.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 유솜</Title>
            <Description>말을 잘하고 손님을 잘 다룸</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308704371.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 소백</Title>
            <Description>현현새 나이많음 하녀마인드</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308695026.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 엠초</Title>
            <Description>쓰입마인드 노노팬티라는 소문 케바케</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308685748.png"
              alt="강남 셔츠룸 송대표"
            />
            <Title>강남셔츠룸 강남 란제리 연수</Title>
            <Description>손님어리거나 잘생기면 물빨 골뱅이</Description>
          </GridUnit>
        </GridWrapper>
        <Introduction>
          <h1>강남셔츠룸 혼자서 편안한 술자리</h1>
          <p>
            다른 종류에 룸과 달리 술과 함께 편안하게 즐길 수 있는 곳입니다.
            특히, 혼자 방문하셔도 오픈 마인드인 매니저와 함께 단둘이 술자리를
            즐기시면서 어색한 시간이 전혀 없습니다. 룸 안에서 편안하게 즐길 수
            있으며, 매니저와 함께 즐길 수 있는 다양한 술과 안주를 맛보실 수
            있습니다. 물론, 서비스 범위를 넘어선 행동은 금지됩니다.강남의
            셔츠룸시스템은 전국적으로 전파되어 제주도에서도 셔츠룸이 인기가
            있습니다 기존의 퍼블릭 룸싸롱이나 가라오케 시스템과는 다른 좀더
            적극적인 매니저들의 복장과 마인드가 장점인 룸싸롱 입니다 매니저들의
            옷차림은 홀복이 아닌 셔츠를 입어서 셔츠룸이라고 불리 웁니다.
            매니저와 전화번호를 주고 받고 사적으로 연락을 하며 애인사이가 되어
            연애를 하시길 바랍니다. 강남 셔츠룸은 일종의 룸 서비스로, 가라오케나
            룸처럼 노래나 게임을 즐기는 시스템과는 다릅니다. 대신 고급스런
            인테리어와 함께 퀄리티 높은 매니저가 함께 해드리며, 테이블에서
            간단한 호구조사와 함께 술 한 잔하며 즐길 수 있는 곳입니다. 강남
            셔츠룸의 매니져들을 아래 그림으로 대략 소개드립니다.
          </p>
        </Introduction>
      </Center>
      <Footer />
    </div>
  );
}
