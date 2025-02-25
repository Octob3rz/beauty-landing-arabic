import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Brush, 
  DollarSign, 
  MapPin, 
  MessageSquare 
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'services', label: 'Services', icon: Brush },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'contact', label: 'Contact', icon: MessageSquare }
];

export const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const scrollProgress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));

      // Determine active section more precisely
      const sections = ['hero', 'services', 'pricing', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const nextSection = sectionElements[i + 1];
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = nextSection ? nextSection.offsetTop : documentHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For the home section, scroll to the top of the page
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Scroll to the element with a small offset
        const offset = 80; // Adjust this value to fine-tune positioning
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-black/10 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
        <div className="relative">
          {/* Progress Bar */}
          <motion.div 
            className="absolute right-1/2 translate-x-1/2 w-0.5 md:w-1 bg-primary/20 rounded-full" 
            style={{ 
              height: '100%', 
              top: 0,
              transformOrigin: 'top center'
            }}
          >
            <motion.div 
              className="absolute right-1/2 translate-x-1/2 w-0.5 md:w-1 bg-primary rounded-full" 
              style={{ 
                height: `${progress}%`,
                transformOrigin: 'top center'
              }}
            />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="relative z-10 space-y-2 md:space-y-4 p-1 md:p-2">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-300
                    ${isActive 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white text-black hover:bg-primary/10 shadow-sm'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
