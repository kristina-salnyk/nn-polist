import React from 'react';
import PropTypes from 'prop-types';

import { ContainerStyled } from './Container.styled';

const Container = ({ children, className }) => (
	<ContainerStyled className={className}>{children}</ContainerStyled>
);

export default Container;

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
	className: PropTypes.string,
};
