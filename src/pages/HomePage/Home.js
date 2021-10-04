import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';
import InfoSectionBt  from "./InfoSectionBt";
import InfoSectionBtSat  from "./InfoSectionBtSat";
import InfoSectionBtF  from "./InfoSectionBtF";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSectionBtSat {...homeObjThree} />
      <InfoSectionBt {...homeObjTwo} />
      <InfoSectionBtF {...homeObjFour} />
    </>
  );
}

export default Home;
