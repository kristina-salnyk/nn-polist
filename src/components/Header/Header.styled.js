import styled from 'styled-components';

export const HeaderStyled = styled.header`
	padding: ${({ theme }) => theme.spacing[2]};
	font-weight: ${({ theme }) => theme.typography.weight.semiBold};
	font-size: ${({ theme }) => theme.typography.size.l};
	background-color: ${({ theme }) => theme.colors.background.secondary};
	color: ${({ theme }) => theme.colors.text.secondary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
