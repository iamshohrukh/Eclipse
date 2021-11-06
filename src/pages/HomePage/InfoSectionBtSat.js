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
                {/* <a href="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#4.34/40.02/73.7"> */}
                <Button big fontBig primary={primary} onClick={redirect}>
                  {buttonFirst}
                </Button>
                {/* </a> */}
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
