import React from 'react';
import Snowfall from 'react-snowfall';
import TemperatureConverter from './components/TemperatureConverter';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
      <Snowfall color="white" snowflakeCount={100} />
      <TemperatureConverter />
    </div>
  );
}
