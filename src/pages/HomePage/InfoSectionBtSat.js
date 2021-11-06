import React from "react";
import { Container, Button } from "../../globalStyles";
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
  InfoSec,
} from "../../components/InfoSection/InfoSection.elements";
import { useHistory } from "react-router-dom";
export default function InfoSectionBt({
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

  start,
}) {
  let history = useHistory();

  const redirect = () => {
    history.push("/satellite");
  };

  return (
    <>
      {/* <InfoSee> */}
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button big fontBig primary={primary} onClick={redirect}>
                  {buttonFirst}
                </Button>
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
