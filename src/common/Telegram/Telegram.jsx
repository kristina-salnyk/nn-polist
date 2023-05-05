import * as React from 'react';

import { TelegramStyled } from './Telegram.styled';

const Telegram = () => (
	<TelegramStyled>
		<svg width={20} height={20} aria-label='Telegram link'>
			<g clipPath='url(#a)'>
				<path
					fill='#fff'
					d='M18.234.309.406 8.438C-.172 8.66-.109 9.62.47 9.84l4.508 1.629 1.8 6.504c.13.515.707.664 1.032.293l2.64-2.809 5.02 4.215c.386.293.902.074 1.031-.445l3.473-17.145c.195-1.258-.77-2.219-1.739-1.773ZM7.81 12.723l-.579 3.843-1.289-5.32 12.551-9.46Zm0 0'
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h20v20H0z' />
				</clipPath>
			</defs>
		</svg>
	</TelegramStyled>
);

export default Telegram;
