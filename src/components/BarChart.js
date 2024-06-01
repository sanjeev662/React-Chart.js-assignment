import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const categories = Array.from(new Set(data.map(alert => alert.alert?.category).filter(category => category)));
  const categoryCounts = categories.map(category => data.filter(alert => alert.alert?.category === category).length);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Alert Categories',
        data: categoryCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Alert Categories</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default BarChart;

