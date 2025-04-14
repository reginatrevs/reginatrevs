import React from 'react';
import styled, { css } from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'pill';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  as?: any;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

const ButtonBase = styled.button<Omit<ButtonProps, 'icon' | 'iconPosition'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-main);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Size Variants */
  ${props => props.size === 'small' && css`
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    height: 2.25rem;
  `}
  
  ${props => (!props.size || props.size === 'medium') && css`
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
    height: 2.5rem;
  `}
  
  ${props => props.size === 'large' && css`
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
    height: 2.75rem;
  `}
  
  /* Full Width */
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  /* Button Variants */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background-color: var(--primary);
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #8240e9; /* Brighter purple */
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      
      &:after {
        opacity: 1;
      }
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: var(--secondary);
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #b080ff; /* Lighter bright purple */
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      
      &:after {
        opacity: 1;
      }
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
    
    &:hover:not(:disabled) {
      background-color: #8240e9; /* Match primary hover */
      color: white;
      border-color: #8240e9;
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(130, 64, 233, 0.2);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: none;
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: var(--primary);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    
    &:hover:not(:disabled) {
      background-color: #8240e9; /* Match primary hover */
      color: white;
      transform: translateX(2px);
    }
  `}
  
  ${props => props.variant === 'pill' && css`
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-pill);
    padding: 0.5rem 1.25rem;
    
    &:hover:not(:disabled) {
      background-color: #8240e9; /* Match primary hover */
      border-color: #8240e9;
      color: white;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(130, 64, 233, 0.2);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: none;
    }
  `}
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.position === 'right' ? '0.5rem' : 0};
  margin-right: ${props => props.position === 'left' ? '0.5rem' : 0};
  font-size: 1.2em;
  transition: transform 0.2s ease;
  
  ${props => props.position === 'right' && `
    .button-hover-slide:hover & {
      transform: translateX(4px);
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}) => {
  // Default arrow icon for text buttons if no icon is provided
  const actualIcon = variant === 'text' && !icon ? <FiArrowRight /> : icon;
  const actualIconPosition = variant === 'text' && !icon ? 'right' : iconPosition;
  
  return (
    <ButtonBase 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth} 
      className={actualIconPosition === 'right' ? 'button-hover-slide' : ''}
      {...props}
    >
      {actualIcon && actualIconPosition === 'left' && 
        <IconWrapper position="left">{actualIcon}</IconWrapper>}
      {children}
      {actualIcon && actualIconPosition === 'right' && 
        <IconWrapper position="right">{actualIcon}</IconWrapper>}
    </ButtonBase>
  );
};

export default Button; 