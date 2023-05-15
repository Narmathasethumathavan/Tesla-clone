import { React } from 'react';
import ModelS from './ModelS';
import ModelT from './ModelT';
import ModelX from './ModelX';
import ModelY from './ModelY';
import PowerWall from './PowerWall';
import Charging from './Charging';
import { Box } from '@mui/material';

const Header = (context) =>
	<Box sx={ { display: 'flex', justifyContent: 'center' } }>
		<ModelS { ...context }/>
		<ModelT { ...context }/>
		<ModelX { ...context }/>
		<ModelY { ...context }/>
		<PowerWall { ...context }/>
		<Charging { ...context }/>

	</Box>;

export default Header;
