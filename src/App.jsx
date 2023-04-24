import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import Header from './components/Header/Header';

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Inter', 'sans-serif'],
			},
		});
	}, []);

	return <Header />;
}

export default App;
