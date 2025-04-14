import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../../components/Layout/Container';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import projects, { Project } from '../../data/projects';

const ProjectHeader = styled.div`
  padding-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`;

const BackButton = styled(Button)`
  margin-bottom: var(--spacing-lg);
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-lg);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectDetailsCard = styled(Card)`
  position: sticky;
  top: calc(60px + var(--spacing-lg));
  align-self: start;
  
  @media (max-width: 992px) {
    position: relative;
    top: 0;
  }
`;

const ProjectMetaTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
`;

const Tag = styled.span`
  font-size: 0.875rem;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  background-color: rgba(0, 122, 255, 0.1);
  color: var(--primary);
  font-weight: 500;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const RelatedProjectsSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RelatedProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedProjectCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const RelatedProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
`;

const RelatedProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const NotFoundContainer = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
`;

const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
`;

const NotFoundText = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
`;

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the current project
    const currentProject = projects.find(p => p.id === projectId) || null;
    setProject(currentProject);
    
    // Find related projects (same category, excluding current)
    if (currentProject) {
      const related = projects
        .filter(p => p.category === currentProject.category && p.id !== currentProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    }
    
    // Scroll to top on mount or when projectId changes
    window.scrollTo(0, 0);
  }, [projectId]);
  
  if (!project) {
    return (
      <Container size="lg">
        <NotFoundContainer>
          <NotFoundTitle>Project Not Found</NotFoundTitle>
          <NotFoundText>The project you're looking for doesn't exist or has been removed.</NotFoundText>
          <Button as={Link} to="/portfolio" size="large">
            Back to Portfolio
          </Button>
        </NotFoundContainer>
      </Container>
    );
  }
  
  return (
    <Container size="xl">
      <ProjectHeader>
        <BackButton 
          variant="text" 
          onClick={() => navigate(-1)}
          icon={<span>←</span>}
          aria-label="Back to portfolio"
        >
          Back to Portfolio
        </BackButton>
        
        <ProjectTitle as={motion.h1} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {project.title}
        </ProjectTitle>
        
        <ProjectDescription as={motion.p} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {project.longDescription || project.description}
        </ProjectDescription>
      </ProjectHeader>
      
      <ProjectContent>
        <div>
          <ProjectImageContainer as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
          </ProjectImageContainer>
          
          {relatedProjects.length > 0 && (
            <RelatedProjectsSection>
              <SectionTitle>Related Projects</SectionTitle>
              <RelatedProjectsGrid>
                {relatedProjects.map((relatedProject) => (
                  <RelatedProjectCard
                    key={relatedProject.id}
                    as={motion.div}
                    onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                  >
                    <RelatedProjectTitle>{relatedProject.title}</RelatedProjectTitle>
                    <RelatedProjectDescription>{relatedProject.description}</RelatedProjectDescription>
                  </RelatedProjectCard>
                ))}
              </RelatedProjectsGrid>
            </RelatedProjectsSection>
          )}
        </div>
        
        <ProjectDetailsCard
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectMetaTitle>Technologies</ProjectMetaTitle>
          <TagContainer>
            {project.technologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </TagContainer>
          
          <ButtonsContainer>
            {project.link && (
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                View Live Project
              </Button>
            )}
            
            {project.githubLink && (
              <Button
                as="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                fullWidth
              >
                View on GitHub
              </Button>
            )}
            
            <Button
              as={Link}
              to="/contact"
              variant={!project.link && !project.githubLink ? "primary" : "text"}
              fullWidth
            >
              Inquire About This Project
            </Button>
          </ButtonsContainer>
        </ProjectDetailsCard>
      </ProjectContent>
    </Container>
  );
};

export default ProjectDetailPage; 