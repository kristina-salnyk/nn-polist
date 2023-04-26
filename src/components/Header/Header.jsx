import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { NavLink } from '../../common/NavLink';
import { BurgerMenu } from '../BurgerMenu';
import { Close } from '../Close';
import { Button } from '../../common/Button';
import { ROUTES } from '../../constants';

import {
	Backdrop,
	ContainerStyled,
	HeaderContent,
	HeaderStyled,
	MobileMenuButton,
	NavBar,
	Navigation,
} from './Header.styled';

const Header = () => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(true);

	return (
		<HeaderStyled>
			<ContainerStyled>
				<Backdrop isMobileMenuOpened={isMobileMenuOpened} />
				<HeaderContent isMobileMenuOpened={isMobileMenuOpened}>
					<Link to={ROUTES.HOME}>
						<Logo />
					</Link>
					<NavBar isMobileMenuOpened={isMobileMenuOpened}>
						<Navigation isMobileMenuOpened={isMobileMenuOpened}>
							<NavLink path={ROUTES.HOME} text='Home' />
							<NavLink path={ROUTES.ABOUT_US} text='About us' />
							<NavLink path={ROUTES.NEWS} text='News' />
							<NavLink path={ROUTES.CAREERS} text='Careers' />
							<NavLink path={ROUTES.CONTACTS} text='Contacts' />
						</Navigation>
						<Button
							type='button'
							text='Contact us'
							onClick={() => {}}
							aria-expanded={isMobileMenuOpened}
							aria-controls='mobile-menu'
						/>
					</NavBar>
					<MobileMenuButton
						type='button'
						onClick={() => setIsMobileMenuOpened((prevState) => !prevState)}
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
