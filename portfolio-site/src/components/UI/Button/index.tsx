import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'pill';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  hasIcon: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  
  // Base styles
  ${(props) => props.fullWidth && 'width: 100%;'}
  
  // Size variations
  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 14px;
          border-radius: var(--radius-sm);
        `;
      case 'large':
        return css`
          padding: 14px 28px;
          font-size: 18px;
          border-radius: var(--radius-md);
        `;
      case 'medium':
      default:
        return css`
          padding: 10px 20px;
          font-size: 16px;
          border-radius: var(--radius-sm);
        `;
    }
  }}
  
  // Icon spacing
  ${(props) => props.hasIcon && 'gap: 8px;'}
  
  // Variant styles
  ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return css`
          background-color: var(--secondary);
          color: white;
          
          &:hover {
            background-color: var(--primary);
            box-shadow: 0 5px 15px rgba(90, 200, 250, 0.4);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          
          &:hover {
            background-color: var(--primary);
            color: white;
            box-shadow: 0 5px 15px rgba(0, 122, 255, 0.3);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: var(--primary);
          padding-left: 0;
          padding-right: 0;
          
          &:hover {
            color: var(--primary-lighter);
            text-decoration: underline;
          }
        `;
      case 'pill':
        return css`
          background-color: transparent;
          color: var(--text-primary);
          border: 2px solid var(--text-primary);
          border-radius: var(--radius-pill);
          
          &:hover {
            background-color: var(--text-primary);
            color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px) scale(1.02);
          }
          
          &:active {
            transform: translateY(0) scale(1);
          }
          
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
          }
          
          &:hover::before {
            left: 100%;
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: var(--primary);
          color: white;
          
          &:hover {
            background-color: var(--primary-darker);
            box-shadow: 0 5px 15px rgba(65, 105, 225, 0.4);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      hasIcon={Boolean(icon)}
      {...props}
    >
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;