import AI from '../assets/ai recommend.jpeg';
import csx from '../assets/CSX.jpeg';
import ecom from '../assets/Ecom.jpeg';
import weather from '../assets/weather.jpeg';

export interface Project {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string | null;
    live_url: string | null;
    image_url: string | null;
    display_order: number;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    display_order: number;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    display_order: number;
}

export const skills: Skill[] = [
    { id: '1', name: 'HTML', category: 'Frontend', display_order: 1 },
    { id: '2', name: 'CSS', category: 'Frontend', display_order: 2 },
    { id: '3', name: 'JavaScript', category: 'Frontend', display_order: 3 },
    { id: '4', name: 'React', category: 'Frontend', display_order: 4 },
    { id: '5', name: 'Node.js', category: 'Backend', display_order: 5 },
    { id: '6', name: 'Express', category: 'Backend', display_order: 6 },
    { id: '7', name: 'MongoDB', category: 'Backend', display_order: 7 },
    { id: '8', name: 'Tailwind CSS', category: 'Frontend', display_order: 8 },
    { id: '9', name: 'Git', category: 'Tools', display_order: 9 },
    { id: '10', name: 'GitHub', category: 'Tools', display_order: 10 },
    { id: '11', name: 'TypeScript', category: 'Frontend', display_order: 11 },
    { id: '12', name: 'Firebase', category: 'Backend', display_order: 12 },
    { id: '13', name: 'Next.js', category: 'Backend', display_order: 13 },
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'AI Recommendation System',
        description: 'A smart e-commerce platform featuring AI-based recommendations, visual product search, and an intelligent shopping assistant. It helps users quickly find relevant products using behavior analysis and image similarity matching.',
        tech_stack: ['React', 'Next.js', 'TailwindCSS', 'Python', 'Node.js', 'Docker'],
        github_url: 'https://github.com/Faisal468/Buyonix.git',
        live_url: '',
        image_url: AI,
        display_order: 1,
    },
    {
        id: '2',
        title: 'CloudSphereX',
        description: 'CloudSphereX delivers tailored technology solutions from project management and software development to academic platforms with a passionate team focused on innovation and client success. ',
        tech_stack: ['React', 'Three.js', 'Firebase'],
        github_url: 'https://github.com/Faisal468/CSX.git',
        live_url: 'https://cloudspherex.org',
        image_url: csx,
        display_order: 2,
    },
    {
        id: '3',
        title: 'Ecommerce Mobile App',
        description: "I re-created the frontend of Boreal Coffee's official website and got attracted to their beautiful UI. It was a great project that made me learn advanced CSS and HTML.",
        tech_stack: ['React Native', 'Javascript', 'Node.js', 'Firebase', 'TailwindCSS', 'Docker'],
        github_url: 'https://github.com/Faisal468/Ecommerce-app.git',
        live_url: '',
        image_url: ecom,
        display_order: 3,
    },
    {
        id: '4',
        title: 'Image Classification using Deep Learning',
        description: 'Image Classification using Deep Learning in Python leverages neural networks to automatically identify and categorize images based on learned visual patterns. The system uses frameworks like TensorFlow or PyTorch to train models that achieve accurate and scalable image recognition. ',
        tech_stack: ['Python', 'TensorFlow', 'PyTorch', 'Docker'],
        github_url: 'https://github.com/Faisal468/Image-Classification-using-Deep-Learning.git',
        live_url: '',
        image_url: '',
        display_order: 4,
    },
    {
        id: '5',
        title: 'Speech Classification using Deep Learning',
        description: 'This project demonstrates a deep learning sequence classification model using stacked LSTM layers in TensorFlow/Keras on synthetic time-series data.',
        tech_stack: ['Python', 'TensorFlow', 'PyTorch', 'Docker'],
        github_url: 'https://github.com/Faisal468/Image-Classification-using-Deep-Learning.git',
        live_url: '',
        image_url: '',
        display_order: 5,
    },
    {
        id: '6',
        title: 'Weather Dashboard',
        description: 'A weather forecasting app providing detailed current conditions and 5-day forecasts for any location using OpenWeatherMap API.',
        tech_stack: ['React', 'TypeScript', 'TailwindCSS'],
        github_url: 'https://github.com/meali029/WeatherApp-.git',
        live_url: '',
        image_url: weather,
        display_order: 6,
    },
];

export const experiences: Experience[] = [
    {
        id: '1',
        role: 'Web and App Security Engineer Intern',
        company: 'Nastp Cyber Lab.',
        duration: 'July 2025 - Sep 2025',
        description: 'Developed and secured web applications using React, Node.js, and MongoDB, performing vulnerability assessments, port scanning, and security testing during deployment. Implemented security best practices, monitored exposed services, and collaborated with cross-functional teams to deliver reliable, production-ready, and secure applications.',
        display_order: 1,
    },
    {
        id: '2',
        role: 'Full Stack Developer',
        company: 'CloudSphereX',
        duration: 'Sep 2025 - Dec 2025',
        description: 'Built responsive and scalable user interfaces using React and Tailwind CSS for an AI e-commerce platform, and optimized frontend–backend integration and API performance to significantly improve overall application responsiveness and user experience.',
        display_order: 2,
    },
];
