/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';

const PowerWallPic = () =>
	<div>
		<img
			src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Main-Hero-Desktop-LHD"
			alt="fs"
			width="100%"
			height="50%"
		/>
	</div>;
const PowerWall = (context) =>
	<Box>
		<Button
			variant="text"
			onClick={ <PowerWallPic { ...context }/> }
		>
			Power wall
		</Button>
	</Box>;

export default PowerWall;
