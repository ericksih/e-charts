import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import React = require('react');

type ChartProps = {
  option: EChartsOption;
  style?: React.CSSProperties;
  height?: number | string;
  width?: number | string;
  theme?: 'dark' | 'light';
};

const Chart: React.FC<ChartProps> = ({ option, theme }) => {
  return (
    <ReactECharts
      option={option}
      style={{ width: '100%', height: '600px' }}
      theme={theme || 'light'}
    />
  );
};

export default Chart;
