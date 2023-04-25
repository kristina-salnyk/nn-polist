import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
	position: relative;
	padding: 10px 20px;
	font-size: ${({ theme }) => theme.typography.size.s};
	white-space: nowrap;
	color: ${({ theme }) => theme.colors.text.secondary};
	transition: color ${({ theme }) => theme.animation.cubicBezier};

	&::after {
		content: '';
		position: absolute;
		display: block;
		width: 80%;
		height: ${({ theme }) => theme.shape.borderWidth};
		bottom: 0;
		left: 10%;
		background-color: ${({ theme }) => theme.colors.main};
		transform: scaleX(0);
		transition: transform ${({ theme }) => theme.animation.cubicBezier};
	}

	&.active,
	&:hover {
		color: ${({ theme }) => theme.colors.main};
	}

	&.active::after,
	&:hover::after {
		transform: scaleX(1);
	}
`;
