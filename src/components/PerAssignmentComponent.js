import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';

const PerAssignmentComponent = ({dataAssignments}) => {
  return (
    <Fragment>
    <Bar
    data={dataAssignments}
    height={400}
    width={1600}
    options={{
      maintainAspectRatio: true,
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
    </Fragment>
  )
}

export default PerAssignmentComponent
