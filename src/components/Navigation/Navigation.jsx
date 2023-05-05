import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from '../../common/NavLink';
import { ROUTES } from '../../constants';

const Navigation = ({ onClick, className }) => {
	return (
		<nav onClick={onClick} className={className}>
			<NavLink path={ROUTES.HOME} text='Home' />
			<NavLink path={ROUTES.ABOUT_US} text='About us' />
			<NavLink path={ROUTES.NEWS} text='News' />
			<NavLink path={ROUTES.FIND_JOB} text='Find job' />
			<NavLink path={ROUTES.CONTACTS} text='Contacts' />
		</nav>
	);
};

export default Navigation;

Navigation.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
};
