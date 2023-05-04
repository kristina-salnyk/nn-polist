import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from '../../common/NavLink';
import { Button } from '../../common/Button';
import { ROUTES } from '../../constants';

import { NavBarStyled, Navigation } from './NavBar.styled';

const NavBar = ({ isMobileMenuOpened = false, onClose }) => {
	return (
		<NavBarStyled isMobileMenuOpened={isMobileMenuOpened}>
			<Navigation isMobileMenuOpened={isMobileMenuOpened} onClick={onClose}>
				<NavLink path={ROUTES.HOME} text='Home' />
				<NavLink path={ROUTES.ABOUT_US} text='About us' />
				<NavLink path={ROUTES.NEWS} text='News' />
				<NavLink path={ROUTES.FIND_JOB} text='Find job' />
				<NavLink path={ROUTES.CONTACTS} text='Contacts' />
			</Navigation>
			<Button type='button' text='Contact us' onClick={onClose} />
		</NavBarStyled>
	);
};

export default NavBar;

NavBar.propTypes = {
	isMobileMenuOpened: PropTypes.bool,
	onClose: PropTypes.func,
};
