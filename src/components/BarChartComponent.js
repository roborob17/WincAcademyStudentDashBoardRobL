import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartComponent = ({dataAverage}) => {
  return (
    <Bar
    data={dataAverage}
    height={400}
    width={1600}
    options={{
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          boxWidth: 10,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
      },
    }}
  />
  )
}

export default BarChartComponent
