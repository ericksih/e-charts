import React = require('react');
import Chart from '../components/Chart';

const ChartPage = () => {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Chart
        option={{
          title: {
            text: 'Bar Chart',
            subtext: 'Bar Simple',
          },
          grid: { top: 8, right: 8, bottom: 24, left: 36 },
          xAxis: {
            type: 'category',

            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [5, 20, 36, 10, 10, 20],
              type: 'bar',
            },
          ],
          tooltip: {
            trigger: 'axis',
          },
        }}
      />

      <hr />

      <Chart
        option={{
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
              {
                product: 'Matcha Latte',
                '2015': 43.3,
                '2016': 85.8,
                '2017': 93.7,
              },
              { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
              {
                product: 'Cheese Cocoa',
                '2015': 86.4,
                '2016': 65.2,
                '2017': 82.5,
              },
              {
                product: 'Walnut Brownie',
                '2015': 72.4,
                '2016': 53.9,
                '2017': 39.1,
              },
            ],
          },
          xAxis: { type: 'category' },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
        }}
      />
    </div>
  );
};

export default ChartPage;
