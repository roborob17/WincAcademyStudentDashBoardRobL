import React, {useContext} from 'react';
import BarChartComponent from './BarChartComponent';

import {AssignmentNamesContext} from '../../context/AssignmentNamesContext';
import {DataContext} from '../../context/DataContext';
import {AssignmentShortNamesContext} from '../../context/AssignmentShortNamesContext';

const BarChart = () => {
	const assignments = useContext(AssignmentNamesContext);
	const data = useContext(DataContext);
	const assignmentNames = useContext(AssignmentShortNamesContext);

	const getGrades = (name, grade) => {
		const difGrades = data
			.filter((asg) => asg['Welke opdracht of welk project lever je nu in?'] === name)
			.map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);

		const averageGrade =
			difGrades.map((grade) => parseInt(grade)).reduce((prevGrade, currentGrade) => prevGrade + currentGrade) /
			difGrades.length;
		return averageGrade;
	};

	const averageAllAssignments = (grade) => {
		return assignments.map((assignment) => getGrades(assignment, grade));
	};

	const dataAverage = {
		labels: assignmentNames,
		datasets: [
			{
				label: 'Hoe moeilijk vond je deze opdracht?',
				data: averageAllAssignments('moeilijk'),
				backgroundColor: 'red',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'Hoe leuk vond je deze opdracht?',
				data: averageAllAssignments('leuk'),
				backgroundColor: '#1da1f2',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='bar-chart'>
			<p>Dit zijn de gemiddelden van alle opdrachten</p>
			<BarChartComponent dataAverage={dataAverage}/>
		</div>
	);
};

export default BarChart;
