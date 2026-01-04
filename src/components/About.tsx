import { Award } from 'lucide-react';

const About = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const journeyItems = [
    {
      year: '2023',
      title: 'Started Journey',
      description: 'Discovered programming and developed a strong passion for software development.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      year: '2024',
      title: 'First Major Project',
      description: 'Built and launched a successful web application',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Team Lead',
      description: 'Successfully defend my FYP-II focused on practical implementation and real-world use cases.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      year: '2026',
      title: 'Current',
      description: 'Continuing to learn, grow, and embrace new challenges in the tech industry.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            About <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Get to know me!</h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a <strong>Full Stack Web Developer</strong> who builds and manages both the frontend and backend of modern web applications, contributing directly to the success and scalability of the final product.
              </p>
              <p>
                I'm passionate about creating intuitive, dynamic user experiences on the web. I have experience working with modern technologies and frameworks to build responsive and performant applications.
              </p>
              <p>
                I have strong hands-on experience with Machine Learning, including training models and integrating intelligent, data-driven features into web products.
              </p>
              <p>
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact me</strong>.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              CONTACT
            </button>
          </div>

          {/* Right Column - My Journey */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold dark:text-white">My Journey</h3>
              <p className="text-gray-500 text-sm">The path that led me here</p>
            </div>

            <div className="space-y-6">
              {journeyItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >

                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold shadow-lg flex items-center gap-2 min-w-[100px] justify-center text-sm md:text-base`}>
                    <Award size={16} />
                    {item.year}
                  </div>

                  <div className="flex-1 bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-purple-500 transition-all shadow-md group">
                    <h4 className="font-bold text-lg dark:text-white mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
