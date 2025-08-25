import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Container from '../../components/Layout/Container';
import Card from '../../components/UI/Card';
import profile from '../../data/profile';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-top: var(--spacing-xl);
`;

const PageTitle = styled.h1`
  font-size: var(--text-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.5px;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: var(--text-4xl);
  }
`;

const PageDescription = styled.p`
  font-size: var(--text-xl);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const ContactLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const Section = styled.div`
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-xl);
  }
`;

const SectionLabel = styled.h2`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-lg);
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: var(--text-xs);
    margin-bottom: var(--spacing-md);
  }
`;

const ContactSection = styled(Section)`
  .contact-item {
    margin-bottom: var(--spacing-lg);
    
    @media (max-width: 768px) {
      margin-bottom: var(--spacing-md);
    }
  }
  
  .contact-value {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
    
    @media (max-width: 768px) {
      font-size: var(--text-2xl);
    }
  }
  
  .contact-label {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    
    @media (max-width: 768px) {
      font-size: var(--text-base);
    }
  }
`;

const LocationSection = styled(Section)`
  .location-item {
    .city {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
      
      @media (max-width: 768px) {
        font-size: var(--text-xl);
      }
    }
    
    .address {
      font-size: var(--text-base);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-sm);
      line-height: 1.5;
      
      @media (max-width: 768px) {
        font-size: var(--text-sm);
      }
    }
    
    .availability {
      font-size: var(--text-base);
      color: var(--text-secondary);
      
      @media (max-width: 768px) {
        font-size: var(--text-sm);
      }
    }
  }
`;

const SocialSection = styled(Section)`
  .social-links {
    display: flex;
    gap: var(--spacing-lg);
    align-items: center;
    
    @media (max-width: 768px) {
      gap: var(--spacing-md);
    }
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(106, 61, 232, 0.1);
    color: var(--primary);
    font-size: 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }
`;

const ContactPage = () => {
  const getIconForPlatform = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return <FaLinkedinIn />;
      case 'GitHub':
        return <FaGithub />;
      case 'Instagram':
        return <FaInstagram />;
      default:
        return null;
    }
  };
  
  return (
    <Container size="xl">
      <PageHeader>
        <PageTitle>Let's Connect!</PageTitle>
        <PageDescription>
          Ready to bring your ideas to life? I'm always excited to collaborate on new projects and discuss creative opportunities.
        </PageDescription>
      </PageHeader>
      
      <ContactLayout>
        <ContactSection>
          <SectionLabel>Contact</SectionLabel>
          <div className="contact-item">
            <div className="contact-value">
              <a href={`mailto:${profile.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {profile.email}
              </a>
            </div>
            <div className="contact-label">Primary Email</div>
          </div>
          <div className="contact-item">
            <div className="contact-value">
              <a href={`mailto:${profile.secondaryEmail}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {profile.secondaryEmail}
              </a>
            </div>
            <div className="contact-label">Secondary Email</div>
          </div>
        </ContactSection>
        
        <LocationSection>
          <SectionLabel>Location</SectionLabel>
          <div className="location-item">
            <div className="city">Ottawa, Canada</div>
            <div className="address">{profile.location}</div>
            <div className="availability">Available for remote collaboration</div>
          </div>
        </LocationSection>
        
        <SocialSection>
          <SectionLabel>Social</SectionLabel>
          <div className="social-links">
            {profile.socialMedia.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="social-link"
                whileHover={{ y: -2 }}
              >
                {getIconForPlatform(social.platform)}
              </motion.a>
            ))}
          </div>
        </SocialSection>
      </ContactLayout>
    </Container>
  );
};

export default ContactPage; 