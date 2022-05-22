import React, { useContext } from 'react';

import '../../styles/Dropdown.css';

import {AssignmentNamesContext} from '../../context/AssignmentNamesContext';
import {AssignmentContext} from '../../context/AssignmentContext';

const Dropdown = () => {
  const assignments = useContext(AssignmentNamesContext);
  const [assignment, setAssignment] = useContext(AssignmentContext); // eslint-disable-line

  const handleChange = (e) => {
		setAssignment(e.target.value);
	};

	return (
		<div className='dropdown'>
			<form>
				<select onChange={handleChange}>
					<option hidden>Kies een opdracht</option>
					{assignments.map((item) => (
						<option value={item} key={item}>
							{item}
						</option>
					))}
				</select>
			</form>
		</div>
	);
};

export default Dropdown;
