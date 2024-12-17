import Center from "@/components/Center";
import Footer from "@/components/Footer";
import GridUnit from "@/components/GridUnit";
import GridWrapper from "@/components/GridWrapper";
import Header from "@/components/Header";
import Link from "next/link";
import styled from "styled-components";

import { FaXTwitter } from "react-icons/fa6";
import Head from "next/head";
import Image from "next/image";

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
      <Head>
        <title>Choonsim coin</title>
      </Head>
      <Center>
        <TwitterLink
          href="https://twitter.com/azerckid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
          <span style={{ marginLeft: "0.5rem" }}>
            Follow me on Twitter for more updates
          </span>
        </TwitterLink>
        <Introduction>
          <h1>Introducing ChoonsimCoin</h1>
          <p>
            A groundbreaking meme coin tailored for the adult entertainment industry. ChoonsimCoin empowers creators and users with secure, anonymous, and efficient transactions. Whether youre supporting your favorite creators or accessing premium content, ChoonsimCoin delivers unparalleled convenience while embracing the fun and bold spirit of meme culture.
          </p>
        </Introduction>
        <GridWrapper>
          <GridUnit>
            <Image
              src="/images/1702308728829.png"
              alt="choonsimcoin"
            />
            <Title>Privacy First</Title>
            <Description>Enjoy discreet transactions with full confidence.</Description>
          </GridUnit>
          <GridUnit>
            <Image
              src="/images/00439-3832481124.png"
              alt="choonsimcoin"
            />
            <Title>Seamless Access</Title>
            <Description>Easily integrate ChoonsimCoin into your favorite platforms.</Description>
          </GridUnit>
          <GridUnit>
            <Image
              src="/images/01073-3022299074.png"
              alt="choonsimcoin"
            />
            <Title>Empowering Creators</Title>
            <Description> A new way for content creators to monetize and connect with their audience.</Description>
          </GridUnit>

        </GridWrapper>
        <Introduction>
          <h1>ChoonsimCoin</h1>
          <p>
            Join the revolution where entertainment meets innovation, all powered by the world of cryptocurrency. ChoonsimCoin is the future of adult entertainment, and its here to stay.
          </p>
        </Introduction>
      </Center>
      <Footer />
    </div>
  );
}
