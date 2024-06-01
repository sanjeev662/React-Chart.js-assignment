import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const severities = Array.from(new Set(data.map(alert => alert.alert?.severity).filter(severity => severity !== undefined)));
  const severityCounts = severities.map(severity => data.filter(alert => alert.alert?.severity === severity).length);

  const chartData = {
    labels: severities.map(severity => `Severity ${severity}`),
    datasets: [
      {
        label: 'Alert Severities',
        data: severityCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Alert Severities</h2>
      <Pie data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default PieChart;

