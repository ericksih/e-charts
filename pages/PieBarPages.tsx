import React = require('react');
import Chart from '../components/Chart';

const PieBarPages = () => {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Chart
        option={{
          title: {
            text: 'Pie Chart',
            subtext: 'Pie Simple',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            top: '10%',
            left: 'center',
            data: ['Merah', 'Hijau', 'Kuning', 'Hello', 'Biru'],
          },
          series: [
            {
              name: 'Sumber akses',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],

              data: [
                { value: 335, name: 'Merah' },
                { value: 310, name: 'Hijau' },
                { value: 234, name: 'Kuning' },
                { value: 135, name: 'Hello' },
                { value: 1548, name: 'Biru' },
              ],
            },
          ],
        }}
      />

      <hr />

      <Chart
        option={{
          title: {
            text: 'Pie Chart',
            subtext: 'Pie Border Radius',
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            // list data ( seacrh engine, direct, email, dll)
            top: '5%',
            left: 'center',
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieBarPages;
