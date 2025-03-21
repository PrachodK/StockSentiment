import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [9074, 8816, 9407, 10424, 9382, 10000, 9650, 10380, 10620, 10230, 10980, 10200, 11450, 11800];


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
    'Page L',
    'Page M',
    'Page N',

  ];
  

export default function TinyLineChart() {
  return (
    <ChartContainer
      width={3010}
      height={1000}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: 'rgba(162, 155, 255, 0.7)',
          strokeWidth: 10,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#a29bff',
          transform: 'rgba(162, 155, 255, 0.7)',
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
