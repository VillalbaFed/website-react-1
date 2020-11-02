import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer,
 FooterWrap, 
 FooterLinksContainer, 
 FooterLinksWrapper, 
 FooterLinkItems, 
 FooterLinkTitle, 
 FooterLink, 
 SocialMedia, 
 SocialMediaWrap, 
 SocialLogo, 
 WebsiteRights,
 SocialIcons,
 SocialIconLink} from './FooterElements';
 

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to='/signin'>About us <br/><br/></FooterLink>
                                <FooterLink to='/signin'>How it Works<br/></FooterLink>
                                <FooterLink to='/signin'>Careers<br/></FooterLink>
                                <FooterLink to='/signin'>Investors<br/></FooterLink>
                                <FooterLink to='/signin'>Terms of Service<br/></FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to='/signin'>Videos <br/><br/></FooterLink>
                                <FooterLink to='/signin'>Submit Video<br/></FooterLink>
                                <FooterLink to='/signin'>Ambassadors<br/></FooterLink>
                                <FooterLink to='/signin'>Agency<br/></FooterLink>
                                <FooterLink to='/signin'>Influencer<br/></FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to='/signin'>Contact us<br/><br/></FooterLink>
                                <FooterLink to='/signin'>Contact<br/></FooterLink>
                                <FooterLink to='/signin'>Support<br/></FooterLink>
                                <FooterLink to='/signin'>Destinations<br/></FooterLink>
                                <FooterLink to='/signin'>Sponsorships<br/></FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to='/signin'>Social Media<br/><br/></FooterLink>
                                <FooterLink to='/signin'>Instagram<br/></FooterLink>
                                <FooterLink to='/signin'>Facebook<br/></FooterLink>
                                <FooterLink to='/signin'>Youtube<br/></FooterLink>
                                <FooterLink to='/signin'>Twitter<br/></FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>VirtualBank ES</SocialLogo>
                            <WebsiteRights> VirtualBank ES ® {new Date().getFullYear()} all Rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink> 
                                <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconLink> 
                                <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink> 
                                <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='Linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink>                     
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;