import './styles/App.css';
import Main from './Main';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Navbar />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
