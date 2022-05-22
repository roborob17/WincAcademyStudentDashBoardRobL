import React from 'react';
import BarChart from './components/BarChart';
import PerAssignment from './components/PerAssignment';
import Students from './components/Students';

import {AssignmentProvider} from './context/AssignmentContext';
import {AssignmentNamesProvider} from './context/AssignmentNamesContext';
import {DataProvider} from './context/DataContext';
import {AssignmentShortNamesProvider} from './context/AssignmentShortNamesContext';
import { Switch, Route } from 'react-router-dom';
import './styles/Main.css';

const Main = () => {

	return (
    <DataProvider>
    <AssignmentNamesProvider>
    <AssignmentProvider>
    <AssignmentShortNamesProvider>
		<div className='main'>
			<Switch>
				<Route path='/assignments'>
					<PerAssignment />
				</Route>
				<Route path='/:id'>
					<Students />
				</Route>
				<Route exact path='/'>
					<BarChart />
				</Route>
			</Switch>
		</div>
    </AssignmentShortNamesProvider>
    </AssignmentProvider>
    </AssignmentNamesProvider>
    </DataProvider>
	);
};

export default Main;
