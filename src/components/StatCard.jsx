import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default StatCard;
