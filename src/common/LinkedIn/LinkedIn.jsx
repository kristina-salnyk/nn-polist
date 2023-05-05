import * as React from 'react';

import { LinkedInStyled } from './LinkedIn.styled';

const LinkedIn = () => (
	<LinkedInStyled>
		<svg width={20} height={20} aria-label='LinkedIn link'>
			<g fill='#fff' clipPath='url(#a)'>
				<path d='M19.995 20H20v-7.336c0-3.588-.772-6.352-4.967-6.352-2.017 0-3.37 1.106-3.923 2.156h-.058V6.647H7.074v13.352h4.142v-6.611c0-1.741.33-3.425 2.486-3.425 2.124 0 2.156 1.987 2.156 3.536V20h4.137ZM.33 6.647h4.147V20H.33V6.647ZM2.402 0A2.402 2.402 0 0 0 0 2.402c0 1.325 1.076 2.424 2.402 2.424 1.325 0 2.401-1.098 2.401-2.424A2.403 2.403 0 0 0 2.402 0Z' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h20v20H0z' />
				</clipPath>
			</defs>
		</svg>
	</LinkedInStyled>
);

export default LinkedIn;
