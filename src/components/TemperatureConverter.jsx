import React, { useState } from 'react';
import InputField from './InputField';
import UnitSelector from './UnitSelector';
import ConvertButton from './ConvertButton';
import DisplayArea from './DisplayArea';

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const convertTemperature = () => {
    let temp = parseFloat(temperature);
    let result = '';

    if (isNaN(temp)) {
      setConvertedTemperature('Please enter a valid number.');
      return;
    }

    if (unit === 'celsius') {
      result = `${(temp * 9/5) + 32} °F / ${temp + 273.15} K`;
    } else if (unit === 'fahrenheit') {
      result = `${(temp - 32) * 5/9} °C / ${(temp - 32) * 5/9 + 273.15} K`;
    } else if (unit === 'kelvin') {
      result = `${temp - 273.15} °C / ${(temp - 273.15) * 9/5 + 32} °F`;
    }

    setConvertedTemperature(result);
  };

  return (
    <div className="z-10 max-w-md mx-auto mt-10 p-6 bg-blue-950 text-gray-100 shadow-2xl rounded-md">
      <h1 className="text-3xl font-bold text-center text-gray-200 mb-6">Temperature Converter</h1>
      <InputField temperature={temperature} setTemperature={setTemperature} />
      <UnitSelector unit={unit} setUnit={setUnit} />
      <ConvertButton convertTemperature={convertTemperature} />
      <DisplayArea convertedTemperature={convertedTemperature} />
    </div>
  );
}
