import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import StudentsComponent from './StudentsComponent';
import {AssignmentShortNamesContext} from '../context/AssignmentShortNamesContext';
import {DataContext} from '../context/DataContext'

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
				label: 'How difficult was the assignment?',
				data: gradesByType('moeilijk'),
				backgroundColor: 'orange',
				borderColor: 'black',
				borderWidth: 1,
			},
			{
				label: 'How much fun was the assignment?',
				data: gradesByType('leuk'),
				backgroundColor: '#081145',
				borderColor: 'black',
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='student-chart'>
			<p>These are the results of {id}</p>
			<StudentsComponent studentsData={studentsData}/>
		</div>
	);
};

export default Students;
