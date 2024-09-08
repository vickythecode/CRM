// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import TimeSelector from './TimeSelector';
import StatCard from './StatCard';
import PieChart from './PieChart'; // Ensure this path is correct
import LineChart from './LineChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [timeWindow, setTimeWindow] = useState('1 week');

  useEffect(() => {
    fetchData();
  }, [timeWindow]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com'); // Replace with your dummy API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <TimeSelector setTimeWindow={setTimeWindow} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <StatCard title="Total Sales" value="$12,345" />
        <StatCard title="Active Users" value="1,234" />
        <PieChart data={data} />
      </div>
        <LineChart data={data} />
    </div>
  );
};

export default Dashboard;
