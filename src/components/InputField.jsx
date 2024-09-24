import React from 'react';

export default function InputField({ temperature, setTemperature }) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-300">Enter Temperature:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        className="mt-1 p-3 w-full rounded-md border-2 border-blue-700 bg-blue-900 text-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-300 transition-transform duration-200 transform hover:scale-105"
        placeholder="Enter a number"
      />
    </div>
  );
}
