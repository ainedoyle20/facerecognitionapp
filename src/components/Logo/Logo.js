import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './clipart4638486.png';
 

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa3"><img style={{paddingBottom: '5px'}} alt='logo' src={brain}/></div>
			</Tilt>	
		</div>
	)
}


export default Logo;