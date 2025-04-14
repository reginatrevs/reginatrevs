# Regina Trevs Portfolio

A modern, iOS-inspired portfolio website showcasing design and development work. This site features a clean aesthetic with subtle animations and a responsive layout that works beautifully on all devices.

## Features

- Clean, iOS-inspired design with a modern aesthetic
- Responsive layout for mobile, tablet, and desktop viewports
- Interactive project gallery with filtering by category
- Detailed project pages with related projects
- Contact form with validation
- Subtle animations and transitions using Framer Motion

## Technologies Used

- React 18
- TypeScript
- React Router v6
- Styled Components
- Framer Motion for animations
- Vite for fast development and optimized builds

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/trev0035/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Deployment

This site can be easily deployed to platforms like:

- GitHub Pages
- Netlify
- Vercel

## Project Structure

```
/portfolio-site
  /public            # Static assets
    /images          # Images and media
  /src               # Source code
    /components      # Reusable UI components
      /Layout        # Layout components (Header, Footer, etc.)
      /Portfolio     # Portfolio-specific components
      /UI            # Common UI components (Button, Card, etc.)
    /data            # Mock data and content
    /hooks           # Custom React hooks
    /pages           # Page components
      /Home          # Home page
      /Portfolio     # Portfolio pages
      /Contact       # Contact page
    /styles          # Global styles and theme
    App.tsx          # Main App component with routes
    main.tsx         # Entry point
```

## License

MIT

## Author

Regina Trevs
