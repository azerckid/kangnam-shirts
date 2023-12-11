import Center from "@/components/Center";
import Footer from "@/components/Footer";
import GridUnit from "@/components/GridUnit";
import GridWrapper from "@/components/GridWrapper";
import Header from "@/components/Header";
import styled from "styled-components";

const Background = styled.div`
  background-color: #000;
  padding: 1rem;
  color: #fff;
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
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <Center>
        <GridWrapper>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702306211220.png"
              alt="title"
            />
            <Title>강남셔츠 하련</Title>
            <Description>귀염상 술또라이 사카가능</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308728829.png"
              alt="title"
            />
            <Title>강남셔츠 효린</Title>
            <Description>실장님 새끼 룸뜨억 가능</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308713351.png"
              alt="title"
            />
            <Title>강남셔츠 유솜</Title>
            <Description>말을 잘하고 손님을 잘 다룸</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308704371.png"
              alt="title"
            />
            <Title>강남셔츠 소백</Title>
            <Description>현현새 나이많음 하녀마인드</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308695026.png"
              alt="title"
            />
            <Title>강남셔츠 엠초</Title>
            <Description>쓰입마인드 노노팬티라는 소문 케바케</Description>
          </GridUnit>
          <GridUnit>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1702308685748.png"
              alt="title"
            />
            <Title>강남셔츠 연수</Title>
            <Description>손님어리거나 잘생기면 물빨 골뱅이</Description>
          </GridUnit>
        </GridWrapper>
      </Center>
      <Footer />
    </div>
  );
}
