import React from 'react';
import { Button } from '../../globalStyles';
import {FaFacebook,
   FaInstagram,
  FaYoutube
}  from  'react-icons/fa';
import { 
  FooterContainer,
   FooterSubscription,
    FooterSubHeading, 
     FooterSubText,
     Form,
     FormInput,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinkItems,
     FooterLinkTitle,
     FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRigths,
     SocialIcons,
     SocialIconLink, 
     SocialIcon

     } from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>        
        <FooterSubscription>
            <FooterSubHeading>
                Entra en nuestra galleria para que
                puedas disfrutar de las increibles historias
                que narran los sueños atravez del arte.
            </FooterSubHeading>
            <FooterSubText>
                Puedes ver nuestras  obras  de arte cuando quieras.
            </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Tu email"/>
              <Button fontBig>Subscribe</Button>                         
            </Form>
        </FooterSubscription>

        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Artistas</FooterLinkTitle>
              <FooterLink to="/sing-up">How it works</FooterLink>
              <FooterLink to="/">Crearciones</FooterLink>
              <FooterLink to="/">Arte conceptual</FooterLink>
              <FooterLink to="/">Contactos</FooterLink>
              <FooterLink to="/">Adquirir una obra</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Galleria de Arte</FooterLinkTitle>
              <FooterLink to="/sing-up">How it works</FooterLink>
              <FooterLink to="/">Crearciones</FooterLink>
              <FooterLink to="/">Arte conceptual</FooterLink>
              <FooterLink to="/">Contactos</FooterLink>
              <FooterLink to="/">Adquirir una obra</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>              
            <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contactos</FooterLinkTitle>
              <FooterLink to="/sing-up">How it works</FooterLink>
              <FooterLink to="/">Crearciones</FooterLink>
              <FooterLink to="/">Arte conceptual</FooterLink>
              <FooterLink to="/">Contactos</FooterLink>
              <FooterLink to="/">Adquirir una obra</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Acerca  de </FooterLinkTitle>
              <FooterLink to="/sing-up">How it works</FooterLink>
              <FooterLink to="/">Crearciones</FooterLink>
              <FooterLink to="/">Arte conceptual</FooterLink>
              <FooterLink to="/">Contactos</FooterLink>
              <FooterLink to="/">Adquirir una obra</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>     
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon/>
              Museo Villalobos
            </SocialLogo>
            <WebsiteRigths>Museo Villalobos 2022</WebsiteRigths>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" 
              arial-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" 
              arial-label="Instagram">
                <FaInstagram/>           
              </SocialIconLink>
              <SocialIconLink href={'https://www.youtube.com/channel/UCviNUiu3KyMJxsTtPxNjijw'} target="_blank" 
              arial-label="Youtube" rel="noopenner noreferrer">
                <FaYoutube/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>         
    </FooterContainer>
  )
}

export default Footer
