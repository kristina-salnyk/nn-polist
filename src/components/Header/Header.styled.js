import styled from 'styled-components';
import { Button } from '../../common/Button';

export const HeaderStyled = styled.header`
	background-color: ${({ theme }) => theme.colors.background.secondary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderContent = styled.div`
	padding: ${({ theme }) => theme.spacing[2]} 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavBar = styled.nav`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: block;
	}
`;

export const ButtonStyled = styled(Button)`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: block;
	}
`;

export const MobileMenuButton = styled.button`
	display: block;
	padding: 0;
	width: 32px;
	height: 32px;
	background-color: transparent;
	border: none;
	transition: transform ${({ theme }) => theme.animation.easeOut};

	&:hover {
		transform: rotate(180deg);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: none;
	}
`;
