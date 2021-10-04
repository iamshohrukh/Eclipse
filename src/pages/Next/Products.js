import React from 'react';
import styled from 'styled-components';
import BgImg from '../../images/bg-image.jpg';

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
  font-size: 55px;
  color: #fff;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;



const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Next to Future
          </Title>
          <Desc>
          It is planned to train students to assemble any nanosatellite using the Eclipse 
          project and allow them to enter scientific research. It is planned to change the satellite body to an 
          aluminum body. Also, add a Coronado solar filter and flywheels to stabilize the satellite in space.
          </Desc>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;