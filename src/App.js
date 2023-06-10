import React from 'react';
import GeoChart from './GeoChart';

const App = () => {
  const chartData = [
    {
      id: "ARE",
      value: 610382
    },
    // { id: 'CAN', value: 500 },
    // { id: 'MEX', value: 200 },
  ];

  return (
    <div className='container'>
      <h1 className='text-center my-4 text-primary fw-bold text-uppercase'>Geo Chart Example</h1>
      <GeoChart data={chartData} />
    </div>
  );
};

export default App;
