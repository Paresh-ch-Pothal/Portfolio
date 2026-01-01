

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    bio: string;
    tagline: string;
    logo: string;
    profileImage: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    twitter: string;
    leetcode: string;
    gfg: string;
    resume: string;
}

export interface Skill {
    category: string;
    items: string[];
    progress: number;
}

export interface TimelineItem {
    year: string;
    title: string;
    company: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string | null;
    image: string | null;
}

export interface PortfolioData {
    personal: PersonalInfo;
    social: SocialLinks;
    skills: Skill[];
    timeline: TimelineItem[];
    projects: Project[];
}

