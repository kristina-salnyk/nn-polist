import styled from 'styled-components';

export const BurgerMenuStyled = styled.svg`
	transition: transform ${({ theme }) => theme.animation.cubicBezier};
	cursor: pointer;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: none;
	}

	&:hover {
		transform: rotate(180deg);
	}
`;
