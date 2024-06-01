import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    fetch('./data/sampleData.jsonl')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const jsonData = lines.map(line => JSON.parse(line));
        setData(jsonData);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-black p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Network Security Dashboard</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length > 0 && (
          <>
            <BarChart data={data} />
            <PieChart data={data} />
            <LineChart data={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
