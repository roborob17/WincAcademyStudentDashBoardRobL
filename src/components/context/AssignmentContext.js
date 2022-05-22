import React, {useState, createContext} from 'react';

export const AssignmentContext = createContext();

export const AssignmentProvider = (props) => {
  const [assignment, setAssignment] = useState('');

  return (
    <AssignmentContext.Provider value={[assignment, setAssignment]}>
      {props.children}
    </AssignmentContext.Provider>
  );
}