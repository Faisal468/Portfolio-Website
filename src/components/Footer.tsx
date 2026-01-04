import { Github, Linkedin, MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Name and Description */}
          <div className="text-center md:text-left order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Muhammad Faisal
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto md:mx-0">
              Full Stack Developer crafting beautiful, intuitive digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 order-2">
            {['Home', 'About', 'Projects', 'Resume', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-400 hover:text-white hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 order-3">
            {[
              { icon: Github, href: "https://github.com/Faisal468", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/faisal441900", label: "LinkedIn" },
              { icon: MessageCircle, href: "https://wa.me/923000579453", label: "WhatsApp" },
              { icon: Instagram, href: "https://instagram.com/m_faisal_10", label: "Instagram" },
              { icon: Mail, href: "mailto:mfaisalhussain468@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="p-3 rounded-xl border border-gray-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
          <p>&copy; {currentYear} Muhammad Faisal. All rights reserved.</p>

        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 p-3 md:p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
