import React from 'react';

const TimeSelector = ({ setTimeWindow }) => {
  return (
    <div className="flex justify-end">
      <select 
        onChange={(e) => setTimeWindow(e.target.value)} 
        className="border p-2 rounded">
        <option value="1 day">1 Day</option>
        <option value="1 week">1 Week</option>
        <option value="1 month">1 Month</option>
      </select>
    </div>
  );
};

export default TimeSelector;
