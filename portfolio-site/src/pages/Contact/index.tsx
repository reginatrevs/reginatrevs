import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';
import Container from '../../components/Layout/Container';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import profile from '../../data/profile';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-top: var(--spacing-xl);
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled(Card)`
  height: 100%;
`;

const ContactInfoTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-xl) 0;
`;

const ContactInfoItem = styled.li`
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 122, 255, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-right: var(--spacing-md);
  flex-shrink: 0;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
`;

const ContactValue = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const ContactLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--secondary);
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 122, 255, 0.1);
  color: var(--primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactFormCard = styled(Card)`
  height: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
`;

const FormInput = styled.input`
  font-family: var(--font-main);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const FormTextarea = styled.textarea`
  font-family: var(--font-main);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text-primary);
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
  
  @media (max-width: 768px) {
    align-self: stretch;
    width: 100%;
  }
`;

const ThankYouCard = styled(Card)`
  text-align: center;
  padding: var(--spacing-xl);
`;

const ThankYouTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`;

const ThankYouMessage = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`;

const BackButton = styled(Button)`
  margin: 0 auto;
`;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormSubmitted(false);
  };

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
    <Container size="xl">
      <PageHeader>
        <PageTitle>Contact Me</PageTitle>
        <PageDescription>
          Have a project in mind or just want to say hello? I'd love to hear from you!
        </PageDescription>
      </PageHeader>
      
      <ContactGrid>
        <ContactInfoCard as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ContactInfoTitle>Get in Touch</ContactInfoTitle>
          
          <ContactInfoList>
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactLink href={`mailto:${profile.email}`}>{profile.email}</ContactLink>
              </ContactText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>{profile.location}</ContactValue>
              </ContactText>
            </ContactInfoItem>
          </ContactInfoList>
          
          <ContactInfoTitle>Follow Me</ContactInfoTitle>
          <SocialLinks>
            {profile.socialMedia.map((social) => (
              <SocialLink 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.platform}
                as={motion.a}
                whileHover={{ y: -3 }}
              >
                {getIconForPlatform(social.platform)}
              </SocialLink>
            ))}
          </SocialLinks>
        </ContactInfoCard>
        
        {!formSubmitted ? (
          <ContactFormCard as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <ContactInfoTitle>Send a Message</ContactInfoTitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" size="large">
                Send Message
              </SubmitButton>
            </ContactForm>
          </ContactFormCard>
        ) : (
          <ThankYouCard as={motion.div} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <ThankYouTitle>Thank You!</ThankYouTitle>
            <ThankYouMessage>
              Your message has been received. I'll get back to you as soon as possible.
            </ThankYouMessage>
            <BackButton variant="outline" onClick={resetForm}>
              Send Another Message
            </BackButton>
          </ThankYouCard>
        )}
      </ContactGrid>
    </Container>
  );
};

export default ContactPage; 