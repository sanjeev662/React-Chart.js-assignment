import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {darkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default DarkModeToggle;
