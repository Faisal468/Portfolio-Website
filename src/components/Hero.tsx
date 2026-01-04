import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black relative overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 animate-fadeIn md:pl-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight dark:text-white leading-tight">
              Hey, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Muhammad Faisal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              A passionate Full Stack Developer specializing in the MERN stack with strong hands-on experience in Machine Learning. Builds scalable, high-performance web applications with a focus on clean architecture, responsive design, and seamless user experiences. Designs, trains, and integrates machine learning models to deliver intelligent, data-driven features, transforming complex ideas into efficient, reliable, and smart digital solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={scrollToProjects}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Projects
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">

              {/* Main Glow - Increased opacity and blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 opacity-50 blur-[50px] rounded-full animate-pulse group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Ring Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>

              <img
                src="/src/assets/Faisal.jpeg"
                alt="Muhammad Faisal"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10 transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToProjects}>
        <ArrowDown className="w-6 h-6 text-gray-400 hover:text-purple-600 transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
