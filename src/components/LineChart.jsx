// src/components/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,  // Register the 'category' scale
  LinearScale,    // For linear values on the y-axis
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required elements, scales, and components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Ensuring the x-axis uses 'category' scale
      },
      y: {
        beginAtZero: true,
        type: 'linear',  // Using linear scale for y-axis
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
