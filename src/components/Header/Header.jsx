import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { NavLink } from '../../common/NavLink';
import { Container } from '../../common/Container';
import { BurgerMenu } from '../BurgerMenu';
import { Close } from '../Close';
import { ROUTES } from '../../constants';

import {
	ButtonStyled,
	HeaderContent,
	HeaderStyled,
	MobileMenuButton,
	NavBar,
} from './Header.styled';

const Header = () => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(true);

	return (
		<HeaderStyled>
			<Container>
				<HeaderContent>
					<Link to={ROUTES.HOME}>
						<Logo />
					</Link>
					<NavBar>
						<NavLink path={ROUTES.HOME} text='Home' />
						<NavLink path={ROUTES.ABOUT_US} text='About us' />
						<NavLink path={ROUTES.NEWS} text='News' />
						<NavLink path={ROUTES.CAREERS} text='Careers' />
						<NavLink path={ROUTES.CONTACTS} text='Contacts' />
					</NavBar>
					<ButtonStyled
						type='button'
						text='Contact us'
						onClick={() => {}}
						aria-expanded={isMobileMenuOpened}
						aria-controls='mobile-menu'
					/>
					<MobileMenuButton
						type='button'
						onClick={() => setIsMobileMenuOpened((prevState) => !prevState)}
					>
						{!isMobileMenuOpened && <BurgerMenu />}
						{isMobileMenuOpened && <Close />}
					</MobileMenuButton>
				</HeaderContent>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
