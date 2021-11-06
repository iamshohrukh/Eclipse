import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaInstagram,
  FaEnvelope,
  FaYoutube,
  FaPhoneAlt,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>ECLIPSE © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.instagram.com/eclipse_sat/?hl=ru' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='mailto:camsat.space@gmail.com' target='_blank' aria-label='Twitter'>
              <FaEnvelope />
            </SocialIconLink>
            <SocialIconLink href='tel:+992918681717' target='_blank' aria-label='LinkedIn'>
              <FaPhoneAlt />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/channel/UC7sUQ1PBNEgguX2zHrqMXPg/featured' area-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/razbiralochka/SolarResearchCubeSat' area-label='Github'>
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}
