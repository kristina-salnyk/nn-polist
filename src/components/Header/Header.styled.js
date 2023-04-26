import styled from 'styled-components';

import { Container } from '../../common/Container';

export const HeaderStyled = styled.header`
	background-color: ${({ theme }) => theme.colors.background.secondary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContainerStyled = styled(Container)`
	position: relative;
`;

export const HeaderContent = styled.div`
	padding: ${({ theme }) => theme.spacing[2]} 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({ theme, isMobileMenuOpened }) =>
		isMobileMenuOpened &&
		`@media (max-width: ${theme.breakpoints.tablet[1]}) {
		  position: absolute;
		  top: 0;
		  left: 50%;
		  z-index: 2;
		  transform: translate(-50%);
		  width: 100%;
		  padding: ${theme.spacing[2]}};
		 
		  @media (min-width: ${theme.breakpoints.tablet[0]}) {
		  	padding: ${theme.spacing[2]} ${theme.spacing[3]};
		  }
		 }`}
`;

export const Backdrop = styled.div`
	display: none;

	${({ theme, isMobileMenuOpened }) =>
		isMobileMenuOpened &&
		`@media (max-width: ${theme.breakpoints.tablet[1]}) {
		  display: block;
		  position: fixed;
		  top: 0;
		  left: 0;
		  z-index: 1;
		  height: 100vh;
		  width: 100vw;
		  background-color: ${theme.colors.background.secondary};
	  }`}
`;

export const NavBar = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.tablet[1]}) {
		display: none;
	}

	${({ theme, isMobileMenuOpened }) =>
		isMobileMenuOpened &&
		`@media (max-width: ${theme.breakpoints.tablet[1]}) {
		  position: absolute;
		  top: 100%;
		  left: 50%;
		  transform: translate(-50%);
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: ${theme.spacing[3]}
		}`};

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[5]};
	}
`;

export const Navigation = styled.nav`
	${({ theme, isMobileMenuOpened }) =>
		isMobileMenuOpened &&
		`@media (max-width: ${theme.breakpoints.tablet[1]}) {
		  display: flex;
		  flex-direction: column;
		  gap: ${theme.spacing[2]}
		 }`}
`;

export const MobileMenuButton = styled.button`
	display: block;
	padding: 0;
	width: 32px;
	height: 32px;
	background-color: transparent;
	border: none;
	transition: transform ${({ theme }) => theme.animation.easeOut};
	cursor: pointer;

	&:hover {
		transform: rotate(180deg);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: none;
	}
`;
