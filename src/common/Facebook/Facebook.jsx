import * as React from 'react';

import { FacebookStyled } from './Facebook.styled';

const Facebook = () => (
	<FacebookStyled>
		<svg width={20} height={20} aria-label='Facebook link'>
			<g clipPath='url(#a)'>
				<path
					fill='#fff'
					d='M13.33 3.32h1.827V.14a23.576 23.576 0 0 0-2.66-.14C9.864 0 8.06 1.656 8.06 4.7v2.8H5.156v3.555H8.06V20h3.562v-8.944h2.787l.443-3.555h-3.231V5.05c0-1.027.277-1.73 1.709-1.73Z'
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h20v20H0z' />
				</clipPath>
			</defs>
		</svg>
	</FacebookStyled>
);

export default Facebook;
