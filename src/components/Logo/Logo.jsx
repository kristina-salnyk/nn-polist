import React from 'react';

import logo from '../../assets/img/logo.png';

import { LogoStyled } from './Logo.styled';

const Logo = () => {
	return (
		<LogoStyled>
			<img src={logo} width={40} alt='Logo' />
			<span>N.N. Polist</span>
		</LogoStyled>
	);
};

export default Logo;
