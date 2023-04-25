import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background-color: ${({ theme }) => theme.colors.background.secondary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderContent = styled.div`
	padding: ${({ theme }) => theme.spacing[2]} 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
