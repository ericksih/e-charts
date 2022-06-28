import React = require('react');
import Chart from '../components/Chart';
import { MockDataLineChart } from '../components/MockData';

const LineChartPages = () => {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Chart
        option={{
          loading: false,
          title: {
            text: 'Line Area Basic',
          },
          tooltip: {
            trigger: 'axis',
          },

          dataset: {
            source: MockDataLineChart,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: MockDataLineChart.xAxis1,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
          },
          series: [
            {
              type: 'line',
              data: MockDataLineChart.yAxis1,
              areaStyle: {
                color: 'grey',
                opacity: 0.1,
              },
            },
          ],
        }}
      />

      <hr />

      <Chart
        option={{
          title: {
            text: 'Line Simple',
          },
          tooltip: {
            trigger: 'axis',
          },

          dataset: {
            source: MockDataLineChart,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: MockDataLineChart.xAxis2,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              type: 'line',
              data: MockDataLineChart.yAxis2,
            },
          ],
        }}
        width={'100%'}
        height={'600px'}
      />

      <hr />

      <Chart
        option={{
          title: {
            text: 'Stacked Area Chart',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            data: [
              'Email',
              'Union Ads',
              'Video Ads',
              'Direct',
              'Search Engine',
            ],
          },
          toolbox: {
            feature: {
              saveAsImage: {
                show: true,
                title: 'Save',
                name: 'Line Chart',
                type: 'png',
                lang: ['Save as Image'],
              },
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              label: {
                show: true,
                position: 'top',
              },
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChartPages;
