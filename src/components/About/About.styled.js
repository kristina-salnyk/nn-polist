import styled from 'styled-components';

import { Button } from '../../common/Button';

export const AboutContent = styled.div`
	padding: ${({ theme }) => theme.spacing[4]} 0;
	display: grid;
	grid-gap: ${({ theme }) => theme.spacing[3]};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		grid-template-rows: 1fr 350px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		padding: ${({ theme }) => theme.spacing[5]} 0;
		grid-template-columns: 3fr 5fr;
		grid-gap: ${({ theme }) => theme.spacing[4]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		padding: ${({ theme }) => theme.spacing[6]} 0;
		grid-template-columns: 1fr 1fr;
		grid-gap: ${({ theme }) => theme.spacing[6]};
	}

	@media (min-width: ${({ theme }) =>
			theme.breakpoints.tablet[0]}) and (max-width: ${({ theme }) =>
			theme.breakpoints.tablet[1]}) {
		align-items: center;
	}
`;

export const Images = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		position: relative;
		justify-self: center;
		max-width: 380px;
		width: 100%;
		order: 2;
	}

	@media (min-width: ${({ theme }) =>
			theme.breakpoints.tablet[0]}) and (max-width: ${({ theme }) =>
			theme.breakpoints.tablet[1]}) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: ${({ theme }) => theme.spacing[2]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		position: relative;
	}
`;

export const BackImage = styled.img`
	width: 260px;
	height: 240px;
	object-fit: cover;
	border-radius: ${({ theme }) => theme.shape.borderRadius.s};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}),
		(min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: ${({ theme }) =>
			theme.breakpoints.tablet[0]}) and (max-width: ${({ theme }) =>
			theme.breakpoints.tablet[1]}) {
		width: 280px;
		height: 240px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: 350px;
		height: 320px;
	}
`;

export const FrontImage = styled.img`
	width: 220px;
	height: 200px;
	object-fit: cover;
	border-radius: ${({ theme }) => theme.shape.borderRadius.s};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}),
		(min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	@media (min-width: ${({ theme }) =>
			theme.breakpoints.tablet[0]}) and (max-width: ${({ theme }) =>
			theme.breakpoints.tablet[1]}) {
		width: 280px;
		height: 240px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: 290px;
		height: 260px;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: ${({ theme }) => theme.spacing[1]};
	font-size: ${({ theme }) => theme.typography.size.s};
	color: ${({ theme }) => theme.colors.text.gray};
	order: 1;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.m};
	}
`;

export const SubTitle = styled.h3`
	margin-bottom: ${({ theme }) => theme.spacing[1]};
	font-size: ${({ theme }) => theme.typography.size.l};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.text.primary};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		margin-bottom: ${({ theme }) => theme.spacing[2]};
		font-size: ${({ theme }) => theme.typography.size.xxxxl};
	}
`;

export const Accent = styled.span`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.main};
`;

export const ButtonStyled = styled(Button)`
	margin-top: ${({ theme }) => theme.spacing[2]};
	align-self: end;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		align-self: center;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.text.primary};
	}
`;
