import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 15px rgba(0, 122, 255, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Aspect ratio 5:3 */
  overflow: hidden;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
`;

const ProjectImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
  
  ${ProjectCardContainer}:hover & {
    filter: blur(3px);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  background-color: rgba(0, 122, 255, 0.1);
  color: var(--primary);
  white-space: nowrap;
`;

const FeaturedBadge = styled.span`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background-color: var(--accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  z-index: 2;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const imageVariants = {
    hover: { scale: 1.05 },
    initial: { scale: 1 }
  };

  // Display at most 3 technologies
  const displayTechnologies = project.technologies.slice(0, 3);

  return (
    <CardLink to={`/portfolio/${project.id}`}>
      <ProjectCardContainer 
        variant="default" 
        padding="none"
        className={className}
      >
        <ImageContainer>
          {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
          <ProjectImage 
            src={project.imageUrl} 
            alt={project.title} 
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
          />
        </ImageContainer>
        
        <ProjectContent style={{ padding: 'var(--spacing-lg)' }}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          
          <TagContainer>
            {displayTechnologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
            {project.technologies.length > 3 && (
              <Tag>+{project.technologies.length - 3}</Tag>
            )}
          </TagContainer>
        </ProjectContent>
      </ProjectCardContainer>
    </CardLink>
  );
};

export default ProjectCard; 