import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/Layout/Container';
import ProjectCard from '../../components/Portfolio/ProjectCard';
import projects from '../../data/projects';

type ProjectCategory = 'all' | 'development' | 'design' | 'ui/ux' | 'media';

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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  background-color: ${props => props.$isActive ? 'var(--primary)' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$isActive ? 'var(--primary)' : 'var(--border)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$isActive ? 'var(--primary)' : 'rgba(0, 122, 255, 0.05)'};
    border-color: var(--primary);
    color: ${props => props.$isActive ? 'white' : 'var(--primary)'};
    transform: translateY(-1px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
`;

const EmptyStateText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const PortfolioPage = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  }, [category]);
  
  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Development', value: 'development' },
    { label: 'Design', value: 'design' },
    { label: 'UI/UX', value: 'ui/ux' },
    { label: 'Media', value: 'media' }
  ];
  
  return (
    <Container size="xl">
      <PageHeader>
        <PageTitle>My Portfolio</PageTitle>
        <PageDescription>
          Explore my projects across various domains including web development, 
          design, UI/UX, and media production.
        </PageDescription>
        
        <FilterContainer>
          {categories.map((cat) => (
            <FilterButton
              key={cat.value}
              $isActive={category === cat.value}
              onClick={() => setCategory(cat.value)}
            >
              {cat.label}
            </FilterButton>
          ))}
        </FilterContainer>
      </PageHeader>
      
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <ProjectsGrid 
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={category}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </ProjectsGrid>
        ) : (
          <EmptyState
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="empty"
          >
            <EmptyStateText>No projects found in this category.</EmptyStateText>
          </EmptyState>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default PortfolioPage; 