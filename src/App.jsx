import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { ROUTES } from './constants';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { News } from './pages/News';
import { FindJob } from './pages/FindJob';
import { Contacts } from './pages/Contacts';

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
				<Route index element={<Home />} />
				<Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
				<Route path={ROUTES.NEWS} element={<News />} />
				<Route path={ROUTES.FIND_JOB} element={<FindJob />} />
				<Route path={ROUTES.CONTACTS} element={<Contacts />} />
			</Route>
			<Route path='*' element={<Navigate to={ROUTES.HOME} replace />} />
		</Routes>
	);
};

export default App;
