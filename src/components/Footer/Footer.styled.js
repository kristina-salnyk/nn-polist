import styled from 'styled-components';

import { Navigation } from '../Navigation';

export const FooterStyled = styled.footer`
	background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const FooterWrap = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterContent = styled.div`
	padding: ${({ theme }) => theme.spacing[4]} 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing[3]};
	font-size: ${({ theme }) => theme.typography.size.xs};
	line-height: 1.2;
	color: ${({ theme }) => theme.colors.text.secondary};

	& a {
		font-size: ${({ theme }) => theme.typography.size.xs};
	}

	& a.active {
		color: inherit;
	}

	& a:hover,
	& a.active:hover {
		color: ${({ theme }) => theme.colors.main};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		justify-content: space-between;
		align-items: baseline;
		font-size: ${({ theme }) => theme.typography.size.s};
	}
`;

export const FooterContentStyled = styled(FooterContent)`
	padding: ${({ theme }) => theme.spacing[3]} 0;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const FooterColumn = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
`;

export const FooterColumnStyled = styled(FooterColumn)`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.typography.size.s};
	text-align: center;
`;

export const Text = styled.p`
	max-width: 380px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		max-width: 330px;
	}
`;

export const Links = styled.div`
	display: flex;
	flex-wrap: nowrap;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		justify-content: center;
	}
`;

export const NavigationStyled = styled(Navigation)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	& > a::after {
		display: none;
	}
`;

export const Contacts = styled.address`
	font-style: inherit;
	display: flex;
	flex-direction: column;

	& > a {
		padding: ${({ theme }) => theme.spacing[1]};
		color: inherit;
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[1]};
		font-size: ${({ theme }) => theme.typography.size.s};
		transition: color ${({ theme }) => theme.animation.cubicBezier};
	}
`;

export const Policy = styled.div`
	font-size: ${({ theme }) => theme.typography.size.s};
	display: flex;
	flex-wrap: nowrap;

	& > a {
		padding: ${({ theme }) => theme.spacing[1]}
			${({ theme }) => theme.spacing[2]};
		text-align: center;
		text-decoration: underline;
		white-space: nowrap;
		color: inherit;
		transition: color ${({ theme }) => theme.animation.cubicBezier};

		@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
			padding: ${({ theme }) => theme.spacing[1]};
		}
	}
`;
