import styled from 'styled-components';

export const InstagramStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.main};
	border-radius: ${({ theme }) => theme.shape.borderRadius.l};
	border: ${({ theme }) => theme.shape.borderWidth} solid
		${({ theme }) => theme.colors.main};
	transition: background-color ${({ theme }) => theme.animation.cubicBezier};
	cursor: pointer;

	&:hover {
		background-color: transparent;
	}
`;
