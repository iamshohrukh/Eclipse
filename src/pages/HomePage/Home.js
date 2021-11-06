import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import InfoSectionBPark from './InfoSectionBPark';
import InfoSectionBt from "./InfoSectionBt";
import InfoSectionBtSat from "./InfoSectionBtSat";
import InfoSectionBtF from "./InfoSectionBtF";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import WM from "./wm1.png";
import NASA from "./nasa1.png";
import SAPPS from "./sapps.png";
import EAS from "./eas.png";
import AS from "./as.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 770, itemsToShow: 3 },
  { width: 990, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

export default function Home() {
  return (
    <>
      <InfoSectionBPark {...homeObjOne} />
      <Carousel
        breakPoints={breakPoints}
        showArrows={false}
        showThumbs={false}
        autoFocus={true}
        autoPlay={true}
        showEmptySlots={false}
        button
      >
        <Item><img src={AS} alt="American Space" /></Item>
        <Item><img src={EAS} alt="European Space Agency"/></Item>
        <Item><img src={SAPPS} alt="Space Apps"/></Item>
        <Item><img src={NASA} alt="NASA"/></Item>
        <Item><img src={WM} alt="World Map"/></Item>
      </Carousel>
      <InfoSectionBtSat {...homeObjThree} />
      <InfoSectionBt {...homeObjTwo} />
      <InfoSectionBtF {...homeObjFour} />
    </>
  );
}

