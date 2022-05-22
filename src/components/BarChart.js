import React, {useContext} from 'react';
import BarChartComponent from './BarChartComponent';
import {AssignmentNamesContext} from '../context/AssignmentNamesContext';
import {DataContext} from '../context/DataContext';
import {AssignmentShortNamesContext} from '../context/AssignmentShortNamesContext';

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
				label: 'How difficult was the assignment?',
				data: averageAllAssignments('moeilijk'),
				backgroundColor: 'orange',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'How much fun was the assignment?',
				data: averageAllAssignments('leuk'),
				backgroundColor: '#081145',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='bar-chart'>
			<p>These are the averages of all assignments and projects. <br/>
				<br/> Press "How difficult.." or "How much fun..." at the bottom of the stats to choose one or the other.
			</p>
			<BarChartComponent dataAverage={dataAverage}/>
		</div>
	);
};

export default BarChart;
