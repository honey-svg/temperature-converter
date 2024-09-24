import React from 'react';

export default function DisplayArea({ convertedTemperature }) {
  return (
    <div className="mt-6 p-4 text-center text-2xl text-gray-100 bg-blue-900 rounded-md shadow-lg">
      {convertedTemperature}
    </div>
  );
}
