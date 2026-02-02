import { FileText, Download } from 'lucide-react';
import resumePdf from '../assets/Faisal Resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Resume</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A quick look at my experience, skills, and strengths.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-6">
                            <FileText className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                        </div>

                        <p className="text-xl md:text-xl text-gray-700 dark:text-gray-300 font-medium mb-8 leading-relaxed max-w-8xl">
                            A Full Stack MERN Developer with hands-on experience in Machine Learning, specializing in scalable, high-performance web applications with clean architecture, responsive design, and AI model and chatbot integration.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-4xl">
                            From intelligent recommendation systems to full-scale web platforms, I enjoy solving real-world problems by building data-driven applications using collaborative filtering clean code, intuitive interfaces, and seamless user experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
                            >
                                <span>View Resume</span>
                                <FileText className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={resumePdf}
                                download="CV Resume.pdf"
                                className="group bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
                            >
                                <span>Download Resume</span>
                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
