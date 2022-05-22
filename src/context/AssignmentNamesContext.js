import React, {createContext} from 'react';
import studentsData from '../data/assignmentGradeData';

export const AssignmentNamesContext = createContext();

export const AssignmentNamesProvider = (props) => {
  const assignmentsArray = studentsData.map((assignment) => {
		return assignment['Welke opdracht of welk project lever je nu in?'];
	});
	const assignments = [...new Set(assignmentsArray)];

  return (
    <AssignmentNamesContext.Provider value={assignments}>
      {props.children}
    </AssignmentNamesContext.Provider>
  );
}