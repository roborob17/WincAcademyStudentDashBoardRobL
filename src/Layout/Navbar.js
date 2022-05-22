import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import studentsData from '../data/assignmentGradeData';

const Navbar = () => {
	const studentsArray = studentsData.map((student) => student['Wie ben je?']);
	const students = [...new Set(studentsArray)];

	return (
		<div className='navbar'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/opdrachten'>Opdrachten</Link>
				</li>
				{students.map((student) => (
					<li key={student}>
						<Link to={`/${student}`}>{student}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
