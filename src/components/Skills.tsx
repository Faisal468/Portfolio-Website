import { skills } from '../data';

// Icon mapping (since we can't dynamically import easily without a map)
import {
    FileCode,
    Palette,
    Database,
    Server,
    Layout,
    GitBranch,
    Github,
    Box,
    Flame,
    Code2
} from 'lucide-react';

const getIcon = (name: string) => {
    switch (name) {
        case 'HTML': return <FileCode className="w-8 h-8 text-orange-500" />;
        case 'CSS': return <Palette className="w-8 h-8 text-blue-500" />;
        case 'JavaScript': return <Code2 className="w-8 h-8 text-yellow-400" />;
        case 'React': return <Box className="w-8 h-8 text-cyan-400" />;
        case 'Node.js': return <Server className="w-8 h-8 text-green-500" />;
        case 'Express': return <Server className="w-8 h-8 text-gray-400" />;
        case 'MongoDB': return <Database className="w-8 h-8 text-green-600" />;
        case 'Tailwind CSS': return <Layout className="w-8 h-8 text-cyan-500" />;
        case 'Git': return <GitBranch className="w-8 h-8 text-red-500" />;
        case 'GitHub': return <Github className="w-8 h-8 text-white" />;
        case 'TypeScript': return <Code2 className="w-8 h-8 text-blue-500" />;
        case 'Firebase': return <Flame className="w-8 h-8 text-yellow-500" />;
        default: return <Box className="w-8 h-8 text-gray-400" />;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The technologies and tools I use to bring ideas to life.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointers-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointers-events-none"></div>

                {/* Marquee Container */}
                <div className="flex w-max animate-scroll">
                    {/* First set of items */}
                    <div className="flex gap-8 px-4">
                        {skills.map((skill) => (
                            <div
                                key={`skill-${skill.id}`}
                                className="w-48 h-32 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-purple-500 transition-colors duration-300"
                            >
                                {getIcon(skill.name)}
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex gap-8 px-4">
                        {skills.map((skill) => (
                            <div
                                key={`skill-duplicate-${skill.id}`}
                                className="w-48 h-32 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-purple-500 transition-colors duration-300"
                            >
                                {getIcon(skill.name)}
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles for animation */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default Skills;
