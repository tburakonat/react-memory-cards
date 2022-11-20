import React from 'react';
import starWarsLogo from './../images/star-wars-logo.png';

const Header = () => {
	return (
		<header className="d-flex flex-column align-items-center py-3" style={{ backgroundColor: 'black' }}>
			<img src={starWarsLogo} alt="star wars logo" width="150px" />
			<h1 className="text-white">Memory Game</h1>
		</header>
	);
};

export default Header;
