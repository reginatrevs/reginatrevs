export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

import hereGif from '../assets/here.gif';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  socialMedia: SocialMedia[];
  skills: {
    category: string;
    items: string[];
  }[];
}

const profile: Profile = {
  name: "Regina Trevs",
  title: "UI/UX Designer & Frontend Developer",
  bio: "Creating engaging digital experiences through thoughtful design and elegant code.",
  longBio: "Hey there! I'm a designer at heart who fell in love with code. With roots in visual design and a passion for crafting seamless user experiences, I've evolved into a full-stack front-end developer who bridges the gap between beautiful aesthetics and functional technology. I speak both design and development languages fluently—turning wireframes and mockups into responsive, interactive experiences with clean, efficient code. Whether I'm sketching user flows, building React components, or debugging APIs, I'm always focused on creating digital products that look amazing and work even better.",
  avatarUrl: hereGif,
  location: "Ottawa, Canada",
  email: "hello@reginatrevs.com",
  resumeUrl: "/files/resume.pdf",
  socialMedia: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/reginatrevs/",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/trev0035",
      icon: "github"
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/reginatrevs",
      icon: "dribbble"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/reginatrevs",
      icon: "twitter"
    }
  ],
  skills: [
    {
      category: "Design",
      items: ["UI/UX Design", "Interaction Design", "Wireframing", "Prototyping", "Brand Identity", "Typography", "Color Theory"]
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js", "Node.js", "CSS-in-JS", "Responsive Design"]
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe Creative Suite", "Sketch", "VS Code", "Git", "Storybook", "Notion"]
    }
  ]
};

export default profile; 