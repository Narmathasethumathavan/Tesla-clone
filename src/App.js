import { React } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

const App = (context) =>
	<div className="App">
		<BrowserRouter>
			<Router { ...context }/>
		</BrowserRouter>
	</div>;

export default App;
