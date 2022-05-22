import React from 'react';
import BarChart from './components/BarChart';
import PerAssignment from './components/PerAssignment';
import Students from './components/Students';

import {AssignmentProvider} from './components/context/AssignmentContext';
import {AssignmentNamesProvider} from './components/context/AssignmentNamesContext';
import {DataProvider} from './components/context/DataContext';
import {AssignmentShortNamesProvider} from './components/context/AssignmentShortNamesContext';
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
