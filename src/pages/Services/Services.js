import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";
import Photo from "./photo_index";
import styled from "styled-components";
import BgImg from "../../images/bg-image.jpg";

const Sec = styled.section`
  background-color: #fff;
  height: 90px;
  display: block;
  background-repeat: no-repeat;
  background-size: fit;
`;

const Section = styled.section`
  background-image: url(${BgImg});
  height: 660px;
  display: block;
  background-repeat: no-repeat;
  background-size: fit;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  padding-top: 443px;
`;

const Title = styled.p`
  font-size: 50px;
  color: #fff;
  font-weight: 400;
  text-align: center;
`;

const TitleS = styled.p`
  padding-top: 20px;
  font-size: 30px;
  color: #000;
  font-weight: 700;
  text-align: center;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
  text-align: center;
`;

function Services() {
  return (
    <>
      <Section>
        <Content>
          <Left>
            <Title>EclipseSat Electronics</Title>
            <Desc>
              We used NVIDIA Jetson Nano developer kit for image processing and
              orientation by the sun. Why Jetson Nano? It simple microcomputer
              which have 4 CPU Cortex- 1,43 GHz and GPU with 128 CUDA Maxwell
              cores. Jetson Nano can work with 5V/5W power supply, so it ideal
              solve for edge computing in our satellite.
              <br />
              Below you can see how satellite takes picture
            </Desc>
          </Left>
        </Content>
      </Section>
      <Sec>
        <TitleS>Result of Satellite</TitleS>
      </Sec>
      <Photo />
      <Sec />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
