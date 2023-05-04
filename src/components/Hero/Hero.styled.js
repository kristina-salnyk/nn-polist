import styled from 'styled-components';

import { Button } from '../../common/Button';
import heroBg from '../../assets/img/hero-bg.jpeg';

export const HeroStyled = styled.section`
	margin: 0 auto;
	padding: 120px 0;
	background-image: linear-gradient(
			to right,
			rgba(50, 50, 50, 0.5),
			rgba(50, 50, 50, 0.5)
		),
		url('${heroBg}');
	background-color: ${({ theme }) => theme.colors.background.secondary};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		padding: 200px 0;
	}
`;

export const HeroContent = styled.div`
	margin: 0 auto;
	max-width: 380px;
	color: ${({ theme }) => theme.colors.text.secondary};
	line-height: 1.2;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		max-width: 580px;
	}
`;

export const Title = styled.h1`
	position: relative;
	margin: ${({ theme }) => theme.spacing[1]} 0;
	font-size: ${({ theme }) => theme.typography.size.xxxl};
	font-weight: ${({ theme }) => theme.typography.weight.bold};

	&::after {
		content: '';
		position: absolute;
		top: 100%;
		right: 0;
		width: 80%;
		height: ${({ theme }) => theme.shape.borderWidth};
		background-color: ${({ theme }) => theme.colors.main};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		margin: ${({ theme }) => theme.spacing[2]} 0;
		font-size: ${({ theme }) => theme.typography.size.xxxxxl};
	}
`;

export const Accent = styled.span`
	color: ${({ theme }) => theme.colors.main};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ButtonStyled = styled(Button)`
	margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const Text = styled.p`
	font-size: ${({ theme }) => theme.typography.size.xs};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.m};
	}
`;
