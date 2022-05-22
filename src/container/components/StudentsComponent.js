import React from 'react';
import { Bar } from 'react-chartjs-2';

const StudentsComponent = ({studentsData}) => {
  return (
    <Bar
				data={studentsData}
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

export default StudentsComponent
