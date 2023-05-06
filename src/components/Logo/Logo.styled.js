import styled from 'styled-components';

export const LogoStyled = styled.div`
	display: inline-block;
	font-family: ${({ theme }) => theme.typography.font.secondary};
	font-weight: ${({ theme }) => theme.typography.weight.semiBold};
	font-size: ${({ theme }) => theme.typography.size.l};
	white-space: nowrap;
	color: ${({ theme }) => theme.colors.text.secondary};
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
`;
