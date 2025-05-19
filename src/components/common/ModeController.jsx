import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ModeController = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // html 태그에 클래스 추가
      document.documentElement.classList.remove('light'); // html 태그에 클래스 추가
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md dark:text-neutral-950 dark:bg-neutral-300 text-neutral-300 bg-neutral-950"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeController;
