import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

const Button = ({ type, text, onClick, className, ...props }) => (
	<ButtonStyled
		type={type}
		onClick={onClick && (() => onClick())}
		className={className}
		{...props}
	>
		{text}
	</ButtonStyled>
);

export default Button;

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};
