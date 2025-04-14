import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

interface HeaderProps {
  className?: string;
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: rgba(242, 242, 247, 0.8); /* iOS background with transparency */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md) 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isActive ? 'var(--primary)' : 'var(--text-primary)'};
  text-decoration: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: var(--primary);
    background-color: rgba(0, 122, 255, 0.05);
  }
  
  ${props => props.$isActive && `
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--primary);
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--card-bg);
  z-index: 200;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`;

const MobileNavLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.$isActive ? 'var(--primary)' : 'var(--text-primary)'};
  text-decoration: none;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer className={className}>
      <Container size="xl">
        <HeaderContent>
          <Logo to="/">Regina Trevs</Logo>
          
          <Nav>
            <NavLink to="/" $isActive={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/portfolio" $isActive={location.pathname.includes('/portfolio')}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" $isActive={location.pathname === '/contact'}>
              Contact
            </NavLink>
          </Nav>
          
          <MobileMenuButton onClick={() => setIsMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </HeaderContent>
      </Container>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <MobileMenuHeader>
              <Logo to="/">Regina Trevs</Logo>
              <MobileMenuButton onClick={() => setIsMenuOpen(false)}>
                ✕
              </MobileMenuButton>
            </MobileMenuHeader>
            
            <MobileNavLink 
              to="/" 
              $isActive={location.pathname === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              to="/portfolio" 
              $isActive={location.pathname.includes('/portfolio')}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </MobileNavLink>
            <MobileNavLink 
              to="/contact" 
              $isActive={location.pathname === '/contact'}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 