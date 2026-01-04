import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            All <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here you will find some of the personal and client projects that I created with each project containing its own case study
          </p>

        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
                  <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                        {project.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>View Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
