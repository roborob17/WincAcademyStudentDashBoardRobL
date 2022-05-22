import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import StudentsComponent from './StudentsComponent';

import {AssignmentShortNamesContext} from '../../context/AssignmentShortNamesContext';
import {DataContext} from '../../context/DataContext'

const Students = () => {
	let { id } = useParams();

  const assignmentNames = useContext(AssignmentShortNamesContext);
  const data = useContext(DataContext)

	const gradesByType = (grade) => {
		const grades = data
			.filter((student) => student['Wie ben je?'] === id)
			.map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);
		return grades;
	};

	const studentsData = {
		labels: assignmentNames,
		datasets: [
			{
				label: 'Hoe moeilijk vond je deze opdracht?',
				data: gradesByType('moeilijk'),
				backgroundColor: 'red',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'Hoe leuk vond je deze opdracht?',
				data: gradesByType('leuk'),
				backgroundColor: '#1da1f2',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='student-chart'>
			<p>Dit zijn de resultaten van {id}</p>
			<StudentsComponent studentsData={studentsData}/>
		</div>
	);
};

export default Students;
