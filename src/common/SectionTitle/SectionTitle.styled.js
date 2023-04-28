import styled from 'styled-components';

export const TitleWrap = styled.div`
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing[1]};
	width: 100%;
	text-align: center;

	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 0;
		width: 100%;
		height: ${({ theme }) => theme.shape.borderWidth};
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

export const Title = styled.h2`
	position: relative;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  display: inline-block;
	font-size: ${({ theme }) => theme.typography.size.xs};
	background-color: ${({ theme }) => theme.colors.background.primary};
	}
`;
