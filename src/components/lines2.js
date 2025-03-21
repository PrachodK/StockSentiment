import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [9789, 10000, 10507, 9857, 10267, 11271, 10574, 11057, 10680, 12015, 12430];



const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    'Page H',
    'Page I',
    'Page J',
    'Page K',

  ];
  

export default function TinyLineChart2() {
  return (
    <ChartContainer
      width={3010}
      height={1000}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: 'rgba(140, 249, 115, 0.8)',
          strokeWidth: 10,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: 'rgba(128, 254, 99, 0.8)',
          transform: 'scale(1)',
          fill: 'green',
          strokeWidth: 17,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
  );
}
