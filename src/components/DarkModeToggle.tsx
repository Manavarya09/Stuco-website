
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark for cyberpunk theme

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored) {
      setIsDark(stored === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 right-6 z-40 interactive p-3 bg-cyber-gray/80 backdrop-blur-md border border-cyber-blue rounded-full hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300 group"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`w-6 h-6 absolute transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`} 
        />
        <Moon 
          className={`w-6 h-6 absolute transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`} 
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
