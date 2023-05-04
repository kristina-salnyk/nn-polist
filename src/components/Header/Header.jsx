import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { BurgerMenu } from '../BurgerMenu';
import { Close } from '../Close';
import { NavBar } from '../NavBar';
import { ROUTES } from '../../constants';

import {
	Backdrop,
	ContainerStyled,
	HeaderContent,
	HeaderStyled,
	MobileMenuButton,
} from './Header.styled';

const Header = () => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

	const closeMobileMenu = (event) => {
		setIsMobileMenuOpened(false);
	};

	return (
		<HeaderStyled>
			<ContainerStyled>
				<Backdrop isMobileMenuOpened={isMobileMenuOpened} />
				<HeaderContent isMobileMenuOpened={isMobileMenuOpened}>
					<Link to={ROUTES.HOME}>
						<Logo />
					</Link>
					<NavBar
						isMobileMenuOpened={isMobileMenuOpened}
						onClose={closeMobileMenu}
					/>
					<MobileMenuButton
						type='button'
						onClick={() => setIsMobileMenuOpened((prevState) => !prevState)}
						aria-expanded={isMobileMenuOpened}
						aria-controls='mobile-menu'
					>
						{!isMobileMenuOpened && <BurgerMenu />}
						{isMobileMenuOpened && <Close />}
					</MobileMenuButton>
				</HeaderContent>
			</ContainerStyled>
		</HeaderStyled>
	);
};

export default Header;
