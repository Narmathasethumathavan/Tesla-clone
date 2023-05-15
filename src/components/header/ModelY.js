/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ModelY = () =>
	<Box>
		<Link
			to="/ModelY"
			style={ { textDecoration: 'none' } }
		>
			<Button
				variant="text"
			>
				Model Y
			</Button>
		</Link>
	</Box>;

export default ModelY;
