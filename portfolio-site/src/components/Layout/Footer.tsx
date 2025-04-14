import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaDribbble, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Container from './Container';
import profile from '../../data/profile';

interface FooterProps {
  className?: string;
}

const FooterContainer = styled.footer`
  padding: var(--spacing-xl) 0;
  background-color: var(--card-bg);
  border-top: 1px solid var(--border);
  margin-top: var(--spacing-xxl);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`;

const FooterLink = styled(Link)`
  font-size: 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  
  &:hover {
    color: white;
    background-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

const ContactIcon = styled.span`
  margin-right: var(--spacing-sm);
  color: var(--primary);
  display: flex;
  align-items: center;
`;

const Copyright = styled.div`
  margin-top: var(--spacing-xl);
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.875rem;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border);
`;

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  const getIconForPlatform = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return <FaLinkedinIn />;
      case 'GitHub':
        return <FaGithub />;
      case 'Dribbble':
        return <FaDribbble />;
      case 'Twitter':
        return <FaTwitter />;
      default:
        return null;
    }
  };
  
  return (
    <FooterContainer className={className}>
      <Container size="xl">
        <FooterContent>
          <FooterSection>
            <FooterHeading>Regina Trevs</FooterHeading>
            <FooterText>{profile.bio}</FooterText>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <FooterText style={{ margin: 0 }}>{profile.location}</FooterText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <FooterText style={{ margin: 0 }}>{profile.email}</FooterText>
            </ContactInfoItem>
            
            <SocialLinks>
              {profile.socialMedia.map((social) => (
                <SocialLink 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                >
                  {getIconForPlatform(social.platform)}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Navigation</FooterHeading>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Projects</FooterHeading>
            <FooterLink to="/portfolio/contact-book">Contact Book</FooterLink>
            <FooterLink to="/portfolio/static-plants">Static Site "Plants"</FooterLink>
            <FooterLink to="/portfolio/ios-lately">iOS Lately</FooterLink>
            <FooterLink to="/portfolio/plant-app">Plant App UI/UX</FooterLink>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © {currentYear} Regina Trevs. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 