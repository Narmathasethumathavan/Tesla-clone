/* eslint-disable max-lines-per-function */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Index';
import ModelSImage from './header/ModelSImage';
import ModelTImage from './header/ModelTImage';
import ModelXImage from './header/ModelXImage';
import ModelYImage from './header/ModelYImage';

const Router = (context) =>
	<Routes>
		<Route
			path="/"
			element={ <Header { ...context }/> }
		/>
		<Route
			path="/ModelS"
			element={ <ModelSImage { ...context }/> }
		/>
		<Route
			path="/ModelT"
			element={ <ModelTImage { ...context }/> }
		/>
		<Route
			path="/ModelX"
			element={ <ModelXImage { ...context }/> }
		/>
		<Route
			path="/ModelY"
			element={ <ModelYImage { ...context }/> }
		/>
	</Routes>;

export default Router;
