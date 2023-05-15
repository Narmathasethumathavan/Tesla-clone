/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ModelT = () =>
	<Box>
		<Link
			to="/ModelT"
			style={ { textDecoration: 'none' } }
		>
			<Button
				variant="text"
			>
				Model3
			</Button>
		</Link>
	</Box>;

export default ModelT;
