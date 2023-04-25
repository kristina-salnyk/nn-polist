import React from 'react';

import logo from '../../assets/img/logo.png';
import { LOGO_ALTERNATIVE_TEXT } from '../../constants';

import { LogoStyled } from './Logo.styled';

const Logo = () => {
	return (
		<LogoStyled>
			<img src={logo} width={40} alt={LOGO_ALTERNATIVE_TEXT} />
			<span>N.N. Polist</span>
		</LogoStyled>
	);
};

export default Logo;
