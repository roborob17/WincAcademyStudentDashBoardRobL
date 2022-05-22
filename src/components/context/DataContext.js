import React, {createContext} from 'react';
import studentsData from '../data/assignmentGradeData';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const data = studentsData;

  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  );
}