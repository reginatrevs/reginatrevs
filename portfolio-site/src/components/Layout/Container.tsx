import React from 'react';
import styled, { css } from 'styled-components';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'fluid';

interface ContainerProps {
  size?: ContainerSize;
  padding?: string;
  className?: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div<Omit<ContainerProps, 'children'>>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding-left: ${props => props.padding || 'var(--spacing-lg)'};
  padding-right: ${props => props.padding || 'var(--spacing-lg)'};
  
  /* Container size variants */
  ${props => props.size === 'sm' && css`
    max-width: 640px;
  `}
  
  ${props => (!props.size || props.size === 'md') && css`
    max-width: 768px;
  `}
  
  ${props => props.size === 'lg' && css`
    max-width: 1024px;
  `}
  
  ${props => props.size === 'xl' && css`
    max-width: 1280px;
  `}
  
  ${props => props.size === 'fluid' && css`
    max-width: 100%;
  `}
  
  /* Responsive padding */
  @media (max-width: 768px) {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
`;

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'md',
  padding,
  className,
  ...props
}) => {
  return (
    <StyledContainer
      size={size}
      padding={padding}
      className={className}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container; 