import React from 'react';
import { useTheme } from 'styled-components';

const Close = () => {
	const theme = useTheme();

	return (
		<svg
			width={32}
			height={32}
			viewBox='0 0 512 512'
			aria-label='Close mobile menu'
		>
			<path
				fill={theme.colors.main}
				d='M 219.328125 2.871094 C 95.476562 22.152344 5.851562 121.023438 0.449219 244.105469 C -2.929688 319.210938 23.644531 386.695312 77.011719 439.160156 C 171.816406 531.976562 322.6875 536.683594 425.148438 449.917969 C 461.402344 419.203125 492.703125 368.984375 505.765625 321.230469 C 511.394531 300.605469 511.84375 295.449219 511.84375 256.214844 C 511.84375 217.203125 511.394531 211.820312 505.765625 191.644531 C 498.785156 165.414062 481.445312 128.195312 466.582031 107.347656 C 411.410156 30.222656 312.105469 -11.703125 219.328125 2.871094 Z M 303.546875 30.222656 C 388.21875 47.035156 457.347656 112.277344 480.992188 197.921875 C 486.625 218.324219 487.300781 223.703125 487.074219 256.214844 C 486.847656 287.375 486.171875 295 481.21875 313.382812 C 459.601562 393.644531 399.925781 454.179688 318.410156 478.617188 C 299.496094 484.222656 295.214844 484.671875 256.484375 484.671875 C 217.527344 484.671875 213.472656 484.222656 195.007812 478.617188 C 168.210938 470.320312 149.070312 461.355469 127.226562 447.003906 C 106.734375 433.554688 77.460938 404.40625 64.402344 384.679688 C 3.152344 292.308594 14.859375 170.121094 92.550781 94.34375 C 115.066406 72.148438 129.703125 61.609375 156.277344 48.605469 C 202.441406 26.1875 251.980469 19.910156 303.546875 30.222656 Z M 303.546875 30.222656 '
			/>
			<path
				fill={theme.colors.main}
				d='M 154.476562 153.753906 C 148.621094 159.582031 143.890625 165.414062 143.890625 166.535156 C 143.890625 167.878906 163.707031 188.503906 187.800781 212.496094 L 231.714844 256.214844 L 187.351562 300.378906 C 137.8125 349.703125 140.738281 343.875 158.527344 360.914062 L 167.3125 369.433594 L 211.898438 325.265625 L 256.484375 280.875 L 301.519531 325.714844 L 346.558594 370.554688 L 358.945312 358.222656 L 371.328125 345.890625 L 326.292969 301.050781 L 281.253906 256.214844 L 326.292969 211.375 L 371.328125 166.535156 L 358.945312 154.203125 L 346.558594 141.871094 L 301.519531 186.710938 L 256.484375 231.550781 L 211.898438 187.160156 C 187.578125 162.945312 166.859375 142.992188 166.410156 142.992188 C 165.734375 142.992188 160.328125 147.925781 154.476562 153.753906 Z M 154.476562 153.753906 '
			/>
		</svg>
	);
};

export default Close;