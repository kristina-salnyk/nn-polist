import styled from 'styled-components';

export const NavBarStyled = styled.div`
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
		gap: ${({ theme }) => theme.spacing[7]};
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
