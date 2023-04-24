import React from 'react';

import Logo from '../Logo/Logo';

import { HeaderStyled } from './Header.styled';

const Header = () => {
	return (
		<HeaderStyled>
			<Logo />
		</HeaderStyled>
	);
};

export default Header;
