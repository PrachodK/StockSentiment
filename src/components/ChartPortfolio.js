import React from 'react';
import {
  Chart as ReactChart,
  AxisOptions,
  ChartOptions,
} from '@tanstack/react-charts';

function ChartPortfolio() {
  // Example data: Two series
  const data = React.useMemo(
    () => [
      {
        label: 'Green Stocks',
        data: [
          { primary: new Date('2023-01-01'), secondary: 120 },
          { primary: new Date('2023-01-02'), secondary: 125 },
          { primary: new Date('2023-01-03'), secondary: 123 },
          { primary: new Date('2023-01-04'), secondary: 130 },
          { primary: new Date('2023-01-05'), secondary: 135 },
        ],
      },
      {
        label: 'Red Stocks',
        data: [
          { primary: new Date('2023-01-01'), secondary: 80 },
          { primary: new Date('2023-01-02'), secondary: 82 },
          { primary: new Date('2023-01-03'), secondary: 78 },
          { primary: new Date('2023-01-04'), secondary: 90 },
          { primary: new Date('2023-01-05'), secondary: 88 },
        ],
      },
    ],
    []
  );

  // X-axis (primary)
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
      scaleType: 'time',
      showGrid: false,
    }),
    []
  );

  // Y-axis (secondary)
  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        showGrid: true,
        elementType: 'line',
      },
    ],
    []
  );

  const chartOptions = {
    data,
    primaryAxis,
    secondaryAxes,
    defaultColors: ['#28a745', '#dc3545'], // Green & Red
  };

  return (
    <div className="chart-container">
      <ReactChart options={chartOptions} />
    </div>
  );
}

export default ChartPortfolio;
