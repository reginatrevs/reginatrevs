import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../components/Layout/Container';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProjectCard from '../../components/Portfolio/ProjectCard';
import profile from '../../data/profile';
import projects from '../../data/projects';

const HeroSection = styled.section`
  padding: var(--spacing-xxl) 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const HeroName = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  letter-spacing: -1px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroBio = styled(motion.p)`
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  max-width: 540px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: var(--spacing-lg);
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

const Blob = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(106, 61, 232, 0.15) 0%, rgba(147, 112, 219, 0.05) 70%, rgba(255, 255, 255, 0) 100%);
  border-radius: 50%;
  z-index: -1;
  filter: blur(50px);
`;

const AboutSection = styled.section`
  padding: var(--spacing-xxl) 0;
  background-color: var(--bg-secondary);
  position: relative;
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  letter-spacing: -0.5px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SkillsTable = styled.div`
  width: 100%;
  margin-top: var(--spacing-xl);
`;

const SkillRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--border-light);
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-out;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: var(--spacing-sm);
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--text-tertiary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: var(--spacing-sm);
  }
`;

const SkillCategory = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.1rem;
  transition: transform 0.3s ease, font-size 0.3s ease;
`;

const SkillList = styled.span`
  color: var(--text-secondary);
  transition: all 0.3s ease;
`;

const ViewButton = styled(Button)`
  @media (max-width: 768px) {
    grid-column: span 2;
    margin-top: var(--spacing-sm);
  }
`;

const FeaturedSection = styled.section`
  padding: var(--spacing-xxl) 0;
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  text-align: center;
  margin-top: calc(-1 * var(--spacing-lg));
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
`;

const HomePage = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <HeroSection>
        <Blob 
          initial={{ x: '100%', y: '-50%' }}
          animate={{ x: '60%', y: '-30%' }}
        />
        <Blob 
          initial={{ x: '-100%', y: '50%' }}
          animate={{ x: '-60%', y: '30%' }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <Container size="xl">
          <HeroContent>
            <HeroText as={motion.div} variants={containerVariants} initial="hidden" animate="show">
              <HeroName variants={itemVariants}>Regina Trevs</HeroName>
              <HeroTitle variants={itemVariants}>{profile.title}</HeroTitle>
              <HeroBio variants={itemVariants}>{profile.longBio}</HeroBio>
              
              <ButtonGroup variants={itemVariants}>
                <Button as={Link} to="/portfolio" size="large">
                  View Portfolio
                </Button>
                <Button as={Link} to="/contact" variant="outline" size="large">
                  Contact Me
                </Button>
              </ButtonGroup>
            </HeroText>
            
            <HeroImageContainer 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroImage
                src={profile.avatarUrl}
                alt={profile.name}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </HeroImageContainer>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <AboutSection>
        <Container size="xl">
          <SectionTitle>My Skills</SectionTitle>
          <IntroText>Take a look at my skills and expertise. Each category represents a key area in which I've developed proficiency throughout my career.</IntroText>
          
          <SkillsTable>
            <TableHeader>
              <div>Category</div>
              <div>Skills</div>
            </TableHeader>
            
            {profile.skills.map((skillGroup, index) => (
              <SkillRow 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  backgroundColor: 'rgba(230, 220, 250, 0.7)',
                  paddingLeft: 'var(--spacing-sm)',
                  scale: 1.01,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
                }}
              >
                <SkillCategory 
                  as={motion.span}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {skillGroup.category}
                </SkillCategory>
                <SkillList>
                  {skillGroup.items.join(', ')}
                </SkillList>
              </SkillRow>
            ))}
          </SkillsTable>
        </Container>
      </AboutSection>
      
      <FeaturedSection>
        <Container size="xl">
          <SectionTitle>Featured Work</SectionTitle>
          <SectionSubtitle>
            Showcasing some of my best projects. Each piece reflects my passion for creating meaningful digital experiences.
          </SectionSubtitle>
          
          <ProjectsGrid>
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </ProjectsGrid>
          
          <ViewAllContainer>
            <Button as={Link} to="/portfolio" size="large">
              View All Projects
            </Button>
          </ViewAllContainer>
        </Container>
      </FeaturedSection>
    </>
  );
};

export default HomePage; 