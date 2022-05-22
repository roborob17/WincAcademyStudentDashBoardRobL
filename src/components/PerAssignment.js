import React, { useContext } from 'react';
import Dropdown from './Dropdown';
import PerAssignmentComponent from './PerAssignmentComponent';

import {AssignmentContext} from '../context/AssignmentContext';
import {DataContext} from '../context/DataContext';

const PerAssignment = () => {
  const [assignment, setAssignment] = useContext(AssignmentContext); // eslint-disable-line
  const data = useContext(DataContext);

	const studentsArray = data.map((student) => student['Wie ben je?']);
	const students = [...new Set(studentsArray)];

	const getGrades = (grade) => {
		const grades = data
			.filter((asgnmnt) => asgnmnt['Welke opdracht of welk project lever je nu in?'] === assignment)
			.map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);
		return grades;
	};

	const dataAssignments = {
		labels: students,
		datasets: [
			{
				label: 'How difficult was the assignment?',
				data: getGrades('moeilijk'),
				backgroundColor: 'orange',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'How much fun was the assignment?',
				data: getGrades('leuk'),
				backgroundColor: '#081145',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='per-assignment'>
			<p>Please choose from the dropdown list which assignment you wish to see.
				<br/> Press "How difficult.." or "How much fun..." at the bottom of the stats to choose one or the other.
			</p>
			<Dropdown />
      <PerAssignmentComponent dataAssignments={dataAssignments}/>
		</div>
	);
};

export default PerAssignment;
