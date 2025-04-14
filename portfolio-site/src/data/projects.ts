export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  thumbnailUrl?: string;
  category: 'development' | 'design' | 'ui/ux' | 'media';
  link?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'contact-book',
    title: 'Contact Book (React)',
    description: 'A modern React contact management application with clean UI and real-time search.',
    longDescription: 'This React-based contact management application features a clean, intuitive interface with real-time search capabilities, contact grouping, and data persistence. The UI follows iOS design principles with smooth animations and transitions.',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: '/images/notto.png',
    category: 'development',
    githubLink: '#',
    link: '#'
  },
  {
    id: 'quiz-api',
    title: 'Quiz API',
    description: 'A robust RESTful API for creating and managing interactive quizzes and assessments.',
    longDescription: 'The Quiz API is a comprehensive backend solution for creating, managing, and analyzing interactive quizzes. It features user authentication, question banks, dynamic quiz generation, and detailed analytics on quiz performance.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    imageUrl: '/images/quizzapi.png',
    category: 'development',
    githubLink: '#'
  },
  {
    id: 'static-plants',
    title: 'Static Site "Plants"',
    description: 'A beautifully designed static website showcasing exotic plant collections.',
    longDescription: 'The Plants static website features stunning photography and information about exotic plant collections. The site emphasizes performance and accessibility while delivering a visually rich experience through optimized imagery and subtle animations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Static Site Generation'],
    imageUrl: '/images/staticplant.png',
    category: 'development',
    link: '#',
    featured: true
  },
  {
    id: 'france-tourism',
    title: 'France Tourism (WordPress)',
    description: 'A comprehensive WordPress-based tourism portal for exploring France.',
    longDescription: 'This WordPress-powered tourism portal offers comprehensive information for travelers exploring France. The site features interactive maps, city guides, accommodation listings, and cultural highlights, all within a visually stunning interface.',
    technologies: ['WordPress', 'PHP', 'Custom Theme Development', 'JavaScript'],
    imageUrl: '/images/wordpress.png',
    category: 'development',
    link: '#'
  },
  {
    id: 'ios-lately',
    title: 'IOS Lately',
    description: 'A sleek iOS productivity app featuring task management and habit tracking.',
    longDescription: 'IOS Lately is a productivity app that combines task management, habit tracking, and daily journaling in one seamless interface. The app features a clean, minimalist design with intuitive gestures and subtle animations that enhance the user experience.',
    technologies: ['Swift', 'UIKit', 'Core Data', 'CloudKit'],
    imageUrl: '/images/lately.png',
    category: 'development',
    link: '#',
    featured: true
  },
  {
    id: 'end-user-website',
    title: 'End User Website',
    description: 'A user-centric website design with intuitive navigation and clear information architecture.',
    longDescription: 'The End User Website project demonstrates best practices in user-centric design with intuitive navigation, clear information architecture, and accessible interfaces. The site prioritizes user needs through thoughtful layout, content structure, and interaction design.',
    technologies: ['HTML/CSS', 'JavaScript', 'Accessibility', 'User Experience Design'],
    imageUrl: '/images/enduser.png',
    category: 'design',
    link: '#',
    featured: true
  },
  {
    id: 'plant-app',
    title: 'Plant App UI/UX',
    description: 'A beautiful plant care mobile application with intuitive tracking and care reminders.',
    longDescription: 'The Plant App UI/UX project showcases a comprehensive mobile application design for plant enthusiasts. The app features plant identification, care schedules, growth tracking, and community features, all within a visually appealing and user-friendly interface.',
    technologies: ['Figma', 'Prototyping', 'Interaction Design', 'UI Animation'],
    imageUrl: '/images/plantapp.png',
    category: 'ui/ux',
    link: '#'
  },
  {
    id: 'cyclery-media',
    title: 'Cyclery Media Direction',
    description: 'Brand identity and media direction for a premium cycling equipment company.',
    longDescription: 'The Cyclery Media Direction project established a cohesive brand identity and content strategy for a premium cycling equipment company. The work included brand guidelines, photography direction, video content planning, and social media strategy.',
    technologies: ['Brand Strategy', 'Photography Direction', 'Content Planning', 'Social Media'],
    imageUrl: '/images/thecyclery.png',
    category: 'media',
    link: '#'
  }
];

export default projects; 