const theme = Object.freeze({
	breakpoints: {
		mobile: '767px',
		tablet: ['768px', '1199px'],
		desktop: '1200px',
	},
	colors: {
		main: '#FF3839',
		black: '#202020',
		white: '#ffffff',
		border: 'rgba(255, 255, 255, 0.34)',
		background: {
			primary: '#F8F8F8',
			secondary: '#202020',
			grey: '#F1F1F1',
		},
		text: {
			primary: '#000000',
			secondary: '#ffffff',
		},
	},
	shadows: [
		'rgba(0, 0, 0, 0.1) 0 4px 12px',
		'7px 4px 14px rgba(49, 21, 4, 0.07)',
		'0 5px 7px -1px rgba(51, 51, 51, 0.23)',
		'0 9px 47px 11px rgba(51, 51, 51, 0.18)',
		'0px 4px 10px 4px #9e9e9e',
	],
	filters: ['drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'],
	animation: {
		cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
	},
	spacing: ['4px', '8px', '16px', '32px', '64px', '128px'],
	shape: {
		borderRadius: { s: '4px', m: '8px', xl: '50px' },
		borderWidth: '2px',
		opacity: 0.6,
	},
	typography: {
		font: {
			primary: ['Poppins, sans-serif'],
			secondary: ['Raleway, sans-serif'],
		},
		size: {
			xxs: '10px',
			xs: '12px',
			s: '14px',
			m: '16px',
			l: '18px',
			xl: '20px',
			xxl: '24px',
			xxxl: '28px',
		},
		weight: {
			light: 300,
			regular: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
		},
	},
});

export default theme;
