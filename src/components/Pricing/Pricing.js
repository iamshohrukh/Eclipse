import { Grid } from '@material-ui/core';
import React from 'react';
import { GoPerson } from 'react-icons/go';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardLength,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <Grid container spacing={1}>
          <Grid xs={4}>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GoPerson />
                </PricingCardIcon>
                <PricingCardPlan>Mahdi Samadov</PricingCardPlan>
                <PricingCardLength>Captain of the Eclipse team, aerospace engineer, PR manager</PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
            </Grid>
            <Grid xs={4}>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GoPerson />
                </PricingCardIcon>
                <PricingCardPlan>Ilnar Khairullin</PricingCardPlan>
                <PricingCardLength>IT programmer, aerospace engineer</PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
            </Grid>
            <Grid xs={4}>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GoPerson />
                </PricingCardIcon>
                <PricingCardPlan>Shohrukh Aminjanov</PricingCardPlan>
                <PricingCardLength>Web-developer</PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
            </Grid>
            </Grid>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
