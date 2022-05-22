import './App.css';
import MainContainer from './container/MainContainer';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Navbar />
				<MainContainer />
			</div>
		</Router>
	);
}

export default App;
