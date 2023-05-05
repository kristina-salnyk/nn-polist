import styled from 'styled-components';

import { Navigation } from '../Navigation';

export const FooterStyled = styled.header`
	background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const FooterWrap = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterContent = styled.div`
	padding: ${({ theme }) => theme.spacing[4]} 0;
	color: ${({ theme }) => theme.colors.text.secondary};
	line-height: 1.2;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: baseline;
	gap: ${({ theme }) => theme.spacing[4]};

	& a:hover,
	& a.active:hover {
		color: ${({ theme }) => theme.colors.main};
	}

	& a.active {
		color: inherit;
	}
`;

export const FooterContentStyled = styled(FooterContent)`
	padding: ${({ theme }) => theme.spacing[3]} 0;

	& a {
		color: inherit;
		transition: color ${({ theme }) => theme.animation.cubicBezier};
	}
`;

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.typography.size.s};
	text-align: center;
`;

export const Text = styled.p`
	max-width: 380px;
	font-size: ${({ theme }) => theme.typography.size.xs};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.s};
	}
`;

export const Links = styled.div`
	display: flex;
	flex-wrap: nowrap;
	gap: ${({ theme }) => theme.spacing[2]};
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
	font-size: ${({ theme }) => theme.typography.size.xs};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.s};
	}

	& > a {
		color: inherit;
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[1]};
		transition: color ${({ theme }) => theme.animation.cubicBezier};
	}
`;

export const Policy = styled.div`
	font-size: ${({ theme }) => theme.typography.size.xs};
	display: flex;
	flex-wrap: nowrap;
	gap: ${({ theme }) => theme.spacing[3]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.s};
	}

	& > a {
		text-decoration: underline;
	}
`;
