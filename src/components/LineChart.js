import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const timestamps = data.map(alert => new Date(alert.timestamp).toLocaleTimeString());
  const alertCounts = data.map((_, index) => index + 1);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Alerts Over Time',
        data: alertCounts,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Alerts Over Time</h2>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default LineChart;

