import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  interactive?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CardContainer = styled(motion.div)<Omit<CardProps, 'children'>>`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-sizing: border-box;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  /* Padding Variants */
  ${props => props.padding === 'none' && css`
    padding: 0;
  `}
  
  ${props => props.padding === 'small' && css`
    padding: var(--spacing-md);
  `}
  
  ${props => (!props.padding || props.padding === 'medium') && css`
    padding: var(--spacing-lg);
  `}
  
  ${props => props.padding === 'large' && css`
    padding: var(--spacing-xl);
  `}
  
  /* Card Variants */
  ${props => (!props.variant || props.variant === 'default') && css`
    background-color: var(--card-bg);
    box-shadow: var(--shadow-sm);
  `}
  
  ${props => props.variant === 'elevated' && css`
    background-color: var(--card-bg);
    box-shadow: var(--shadow-md);
  `}
  
  ${props => props.variant === 'outlined' && css`
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    box-shadow: none;
  `}
  
  /* Interactive States */
  ${props => props.interactive && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    
    &:active {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  `}
`;

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  padding = 'medium',
  interactive = false,
  fullWidth = false,
  className,
  onClick,
  ...props 
}) => {
  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <CardContainer
      variant={variant}
      padding={padding}
      interactive={interactive}
      fullWidth={fullWidth}
      className={className}
      onClick={onClick}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Card; 