/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ModelX = () =>
	<Box>
		<Link
			to="/ModelX"
			style={ { textDecoration: 'none' } }
		>
			<Button
				variant="text"
			>
				Model X
			</Button>
		</Link>
	</Box>;

export default ModelX;
