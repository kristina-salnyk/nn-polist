import styled from 'styled-components';

export const ButtonStyled = styled.button`
	padding: 10px 20px;
	font-size: ${({ theme }) => theme.typography.size.s};
	white-space: nowrap;
	border: ${({ theme }) => theme.shape.borderWidth} solid
		${({ theme }) => theme.colors.main};
	border-radius: ${({ theme }) => theme.shape.borderRadius.s};
	filter: ${({ theme }) => theme.filters[0]};
	color: ${({ theme }) => theme.colors.text.secondary};
	background-color: ${({ theme }) => theme.colors.main};
	transition: background-color ${({ theme }) => theme.animation.cubicBezier};
	cursor: pointer;

	&:hover {
		background-color: transparent;
	}
`;
