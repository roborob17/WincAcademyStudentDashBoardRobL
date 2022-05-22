import React, { useContext } from 'react';

import Dropdown from './Dropdown';
import PerAssignmentComponent from './PerAssignmentComponent';

import {AssignmentContext} from '../../context/AssignmentContext';
import {DataContext} from '../../context/DataContext';

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
				label: 'Hoe moeilijk vond je deze opdracht?',
				data: getGrades('moeilijk'),
				backgroundColor: 'red',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'Hoe leuk vond je deze opdracht?',
				data: getGrades('leuk'),
				backgroundColor: '#1da1f2',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='per-assignment'>
			<p>Hier kun je de cijfers per opdracht bekijken</p>
			<Dropdown />
      <PerAssignmentComponent dataAssignments={dataAssignments}/>
		</div>
	);
};

export default PerAssignment;
