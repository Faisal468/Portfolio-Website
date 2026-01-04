import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';


const Whatsapp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
  >
    <path d="M12.03 2c-5.54 0-10.03 4.49-10.03 10.03 0 1.77.46 3.48 1.33 5l-.18.1-.02.01-3.13 8.35 8.57-3.08.1.06c1.48.83 3.19 1.26 4.96 1.26 5.54 0 10.03-4.49 10.03-10.03 0-5.54-4.49-10.03-10.03-10.03zm0 1.76c4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27-1.48 0-2.91-.39-4.18-1.14l-4.5 1.61 1.63-4.43c-.83-1.32-1.27-2.85-1.27-4.4 0-4.56 3.71-8.27 8.27-8.27zM9.4 6.77c-.12-.34-.41-.35-.71-.36-.23 0-.49 0-.75.29-.26.29-1 .97-1 2.38 0 1.4.99 2.76 1.13 2.95.14.19 2.0 3.12 4.9 4.3.7.28 1.24.46 1.66.59.71.22 1.36.19 1.86.11.57-.08 1.75-.71 2-1.4.25-.68.25-1.28.17-1.4-.08-.12-.27-.2-.57-.34-.3-.15-1.76-.86-2.03-1-.27-.13-.47-.2-.67.11-.2.3-.77.99-.94 1.19-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.29.3-.49.09-.19.04-.36-.02-.51-.06-.15-.67-1.6-1.16-2.19z" />
  </svg>
);

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-b from-purple-600/50 to-blue-500/50 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="flex flex-col space-y-4">
        <a
          href="https://github.com/Faisal468"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/faisal441900/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/TwetbyFaisal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/m_faisal_10/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href='https://wa.me/923000579453'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-white dark:bg-gray-800 hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110'
          aria-label='Whatsapp'
        >
          <Whatsapp className="w-5 h-5" />
        </a>

      </div>
      <div className="w-0.5 bg-gray-300 dark:bg-gray-700 h-20 mx-auto mt-4"></div>
    </div>
  );
};

export default SocialSidebar;
