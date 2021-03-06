import React from 'react';
import styled from 'styled-components';
import { Pricing } from '../../components';
import BgImg from '../../images/bg-image.jpg';

const Section = styled.section`
  background-image: url(${BgImg});
  height: 724px;
  display: block;
  background-repeat: no-repeat;
  background-size: fit;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  padding-top: 443px;
  padding-bottom: 350px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #fff;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 550px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 20px;
`;

// const Button = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 18px;
//   margin-top: 58px;
//   width: 371px;
//   height: 71px;
//   line-height: 71px;
//   font-size: 22px;
//   text-align: center;
//   color: #fff;
//   cursor: pointer;
//   background: linear-gradient(90deg, #0546d6, #3f89fc);
//   text-decoration: none;
//   box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
// `;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            About Us
          </Title>
          <Desc>
            Our team introduce three main members, who are 24 for 7 updating and upgrading system and satellite. Moreover 
          </Desc>
        </Left>
      </Content>
      <Pricing />
    </Section>

  );
};

export default Hero;