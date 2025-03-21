import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [10454, 10285, 10886, 10172, 10529, 10861, 11172, 10983, 11436, 10466, 11744, 11115, 11465];



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

  ];
  

export default function TinyLineChart3() {
  return (
    <ChartContainer
      width={3010}
      height={1000}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: 'rgba(0, 255, 255, 0.9)',
          strokeWidth: 10,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: 'rgba(0, 255, 255, 0.9)',
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
