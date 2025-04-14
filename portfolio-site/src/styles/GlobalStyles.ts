import { createGlobalStyle } from 'styled-components';
import cursorSvg from '../assets/cursor.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Palette - Purple Version */
    --primary: #6A3DE8; /* Royal Purple */
    --primary-darker: #5a31c8; /* Darker Purple */
    --primary-lighter: #8c6af0; /* Lighter Purple */
    --secondary: #9370DB; /* Medium Purple */
    --accent: #ff9500; /* Orange accent - keeping this for contrast */
    
    /* Neutrals */
    --black: #000000;
    --white: #ffffff;
    --grey-100: #f8f9fa;
    --grey-200: #e9ecef;
    --grey-300: #dee2e6;
    --grey-400: #ced4da;
    --grey-500: #adb5bd;
    --grey-600: #6c757d;
    --grey-700: #495057;
    --grey-800: #343a40;
    --grey-900: #212529;
    
    /* Functional */
    --success: #34c759;
    --warning: #ff9500;
    --danger: #ff3b30;
    --info: #5ac8fa;
    
    /* Text */
    --text-primary: var(--grey-900);
    --text-secondary: var(--grey-700);
    --text-tertiary: var(--grey-600);
    --text-light: var(--grey-100);
    
    /* Backgrounds */
    --bg-primary: var(--white);
    --bg-secondary: var(--grey-100);
    --bg-tertiary: var(--grey-200);
    
    /* Border */
    --border: var(--grey-300);
    --border-light: var(--grey-200);
    
    /* Typography */
    --font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --font-mono: 'SF Mono', SFMono-Regular, ui-monospace, Monaco, Menlo, Consolas, monospace;
    
    /* Font Sizes */
    --text-xs: 0.75rem;   /* 12px */
    --text-sm: 0.875rem;  /* 14px */
    --text-base: 1rem;    /* 16px */
    --text-lg: 1.125rem;  /* 18px */
    --text-xl: 1.25rem;   /* 20px */
    --text-2xl: 1.5rem;   /* 24px */
    --text-3xl: 1.875rem; /* 30px */
    --text-4xl: 2.25rem;  /* 36px */
    --text-5xl: 3rem;     /* 48px */
    --text-6xl: 3.75rem;  /* 60px */
    --text-7xl: 4.5rem;   /* 72px */
    --text-8xl: 6rem;     /* 96px */
    --text-9xl: 8rem;     /* 128px */
    
    /* Spacing */
    --space-1: 0.25rem;   /* 4px */
    --space-2: 0.5rem;    /* 8px */
    --space-3: 0.75rem;   /* 12px */
    --space-4: 1rem;      /* 16px */
    --space-5: 1.25rem;   /* 20px */
    --space-6: 1.5rem;    /* 24px */
    --space-8: 2rem;      /* 32px */
    --space-10: 2.5rem;   /* 40px */
    --space-12: 3rem;     /* 48px */
    --space-16: 4rem;     /* 64px */
    --space-20: 5rem;     /* 80px */
    --space-24: 6rem;     /* 96px */
    --space-28: 7rem;     /* 112px */
    --space-32: 8rem;     /* 128px */
    
    /* Additional spacing variables to match component usage */
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 1.5rem;   /* 24px */
    --spacing-lg: 2rem;     /* 32px */
    --spacing-xl: 3rem;     /* 48px */
    --spacing-xxl: 5rem;    /* 80px */
    
    /* Border Radius */
    --radius-sm: 0.25rem;   /* 4px */
    --radius-md: 0.5rem;    /* 8px */
    --radius-lg: 0.75rem;   /* 12px */
    --radius-xl: 1rem;      /* 16px */
    --radius-2xl: 1.5rem;   /* 24px */
    --radius-pill: 9999px;
    
    /* Shadows */
    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    
    /* Z-index */
    --z-0: 0;
    --z-10: 10;
    --z-20: 20;
    --z-30: 30;
    --z-40: 40;
    --z-50: 50;
    --z-auto: auto;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  /* Custom cursor - with fallbacks for better macOS compatibility */
  body {
    font-family: var(--font-main);
    font-size: var(--text-base);
    color: var(--text-primary);
    background-color: var(--bg-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: url(${cursorSvg}) 16 16, auto;
  }
  
  /* Using a more compatible approach for clickable elements */
  a, button, .button, [role="button"], 
  input[type="submit"], input[type="button"], 
  .interactive, [class*="clickable"], 
  [class*="interactive"], [class*="hoverable"] {
    cursor: url(${cursorSvg}) 16 16, pointer;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
  }
  
  h1 {
    font-size: var(--text-4xl);
  }
  
  h2 {
    font-size: var(--text-3xl);
  }
  
  h3 {
    font-size: var(--text-2xl);
  }
  
  h4 {
    font-size: var(--text-xl);
  }
  
  h5 {
    font-size: var(--text-lg);
  }
  
  h6 {
    font-size: var(--text-base);
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--primary-darker);
    }
  }
  
  /* Lists */
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  /* Code */
  pre, code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background-color: var(--grey-100);
    border-radius: var(--radius-sm);
  }
  
  code {
    padding: 0.2em 0.4em;
  }
  
  pre {
    padding: 1rem;
    margin-bottom: 1.5rem;
    overflow-x: auto;
    
    code {
      padding: 0;
      background-color: transparent;
    }
  }
  
  /* Images */
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }
  
  /* Buttons - Base Styles */
  button, .button {
    font-family: var(--font-main);
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  
  /* Custom scrollbar - iOS inspired */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--grey-100);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--grey-400);
    border-radius: 10px;
    border: 2px solid var(--grey-100);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--grey-500);
  }
  
  /* Utilities */
  .container {
    width: 100%;
    max-width: 1200px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default GlobalStyles; 