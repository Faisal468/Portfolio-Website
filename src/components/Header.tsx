import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.includes('Faisal') ? 'home' : item.toLowerCase());

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is active (e.g., top is near the viewport top or within viewport)
          if (rect.top >= -100 && rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Resume', 'Experience', 'Contact'];

  return (
    <header className="fixed top-4 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 z-50 w-fit">
      <nav className={`
        px-6 py-2 rounded-full 
        bg-[#1a1b2e]/80 backdrop-blur-md 
        shadow-2xl border border-gray-800 
        flex flex-row-reverse md:flex-row items-center justify-center gap-4
        transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-3 md:py-4'}
      `}>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const itemId = item.includes('Faisal') ? 'home' : item.toLowerCase();
            const isActive = activeSection === itemId;
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(itemId)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 md:hidden animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item} className="text-center">
                <button
                  onClick={() => scrollToSection(item.includes('Faisal') ? 'home' : item.toLowerCase())}
                  className={`block w-full py-2 transition-colors duration-200 ${item.includes('Faisal')
                    ? 'text-xl font-bold text-gray-900 dark:text-white'
                    : 'text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
