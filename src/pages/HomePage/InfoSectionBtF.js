import React from 'react';
import { Container, Button } from '../../globalStyles';
import {
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  // InfoSee,
  InfoSec
} from '../../components/InfoSection/InfoSection.elements';
function InfoSectionBt({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonFirst,
  img,
  alt,
  imgStart,
  
  start
}) {
  return (
    <>
      {/* <InfoSee> */}
        <InfoSec  lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <a href="https://map.worldweatheronline.com/temperature?lat=35.782170703266075&lng=39.83642578125" >
                  <Button big fontBig primary={primary}>
                    {buttonFirst}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
        </InfoSec>
      {/* </InfoSee> */}
    </>
  );
}

export default InfoSectionBt;
