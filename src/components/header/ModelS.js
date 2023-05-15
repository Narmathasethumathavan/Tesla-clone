/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ModelS = () =>
	<Box>
		<Link
			to="/ModelS"
			style={ { textDecoration: 'none' } }
		>
			<Button
				variant="text"
			>
				ModelS
			</Button>
		</Link>
	</Box>;

export default ModelS;
