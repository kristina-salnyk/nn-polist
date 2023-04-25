import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { ROUTES } from './constants';

const App = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Raleway', 'Poppins', 'sans-serif'],
			},
		});
	}, []);

	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<SharedLayout />}>
				<Route
					index
					path={ROUTES.ABOUT_US}
					element={<Navigate to={ROUTES.HOME} replace />}
				/>
				<Route path={ROUTES.NEWS} element={<Navigate to={ROUTES.HOME} />} />
				<Route path={ROUTES.CAREERS} element={<Navigate to={ROUTES.HOME} />} />
				<Route path={ROUTES.CONTACTS} element={<Navigate to={ROUTES.HOME} />} />
			</Route>
			<Route path='*' element={<Navigate to={ROUTES.HOME} replace />} />
		</Routes>
	);
};

export default App;
