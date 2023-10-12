// This is HeroSection component, Main top section of website
import React from "react";
import styled, { keyframes } from "styled-components";
import blobRed from "../assets/blobRed.svg";
import blobYellow from "../assets/blobYellow.svg";
import blobBlack from "../assets/blobBlack.svg";
import Teamworksvg from "../assets/teamwork3.svg";
import Title from "../Elements/Title";
import SubTitle from '../Elements/SubTitle'

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  /* background-color: #0a0b10; */
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Teamwork = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--yellow);
  margin-right: 0.5rem;
`;

const Hero = (props) => {
  const content = props.content
  return (
    <HomeSection id="home">
      <Blobs>
        <PinkBlob>
          <img src={blobBlack} alt="" width="400" height="400" />{" "}
        </PinkBlob>
        <WhiteBlob>
          <img src={blobYellow} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={blobRed} alt="" width="400" height="400" />
        </PurpleBlob>
      </Blobs>
      <MainContent>
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>{content.wwd}</span>
          </Topic>
          <Title title={content.h2} />
          <SubTitle title={content.h3} />     
        </Lb>
        <Teamwork
          src={Teamworksvg}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default Hero;