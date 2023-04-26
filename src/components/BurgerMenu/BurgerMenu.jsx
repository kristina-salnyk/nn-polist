import React from 'react';
import { useTheme } from 'styled-components';

const BurgerMenu = () => {
	const theme = useTheme();

	return (
		<svg
			width={32}
			height={32}
			viewBox='0 0 512 512'
			aria-label='Open mobile menu'
		>
			<path
				fill={theme.colors.main}
				d='M 0 94.71875 L 0 115.199219 L 512 115.199219 L 512 74.238281 L 0 74.238281 Z M 0 94.71875 '
			/>
			<path
				fill={theme.colors.main}
				d='M 0 254.71875 L 0 273.921875 L 512 273.921875 L 512 235.519531 L 0 235.519531 Z M 0 254.71875 '
			/>
			<path
				fill={theme.colors.main}
				d='M 0 414.71875 L 0 435.199219 L 512 435.199219 L 512 394.238281 L 0 394.238281 Z M 0 414.71875 '
			/>
		</svg>
	);
};

export default BurgerMenu;
