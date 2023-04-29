import styled from 'styled-components';

export const FooterStyled = styled.header`
	background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const FooterContent = styled.div`
	padding: ${({ theme }) => theme.spacing[4]} 0;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

export const Text = styled.p`
	font-size: ${({ theme }) => theme.typography.size.xs};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		font-size: ${({ theme }) => theme.typography.size.m};
	}
`;
