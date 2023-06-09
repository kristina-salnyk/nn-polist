import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../Header';
import { Footer } from '../Footer';

import 'react-toastify/dist/ReactToastify.css';
import { LoaderStyled } from './SharedLayout.styled';

const SharedLayout = () => (
	<>
		<ToastContainer />
		<Header />
		<main>
			<Suspense fallback={<LoaderStyled />}>
				<Outlet />
			</Suspense>
		</main>
		<Footer />
	</>
);

export default SharedLayout;
