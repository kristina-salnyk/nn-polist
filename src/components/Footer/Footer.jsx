import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Container } from '../../common/Container';
import { NavBar } from '../NavBar';
import { Logo } from '../Logo';
import { ROUTES } from '../../constants';

import {
	FooterColumn,
	FooterContent,
	FooterStyled,
	Text,
} from './Footer.styled';

const Footer = () => {
	return (
		<FooterStyled>
			<Container>
				<FooterContent>
					<FooterColumn>
						<Link to={ROUTES.HOME}>
							<Logo />
						</Link>
						<Text>
							Explore our job opportunities with all the information you need,
							and manage all your job applications from start to finish.
						</Text>
					</FooterColumn>
				</FooterContent>
				<FooterColumn>
					<NavBar />
				</FooterColumn>
			</Container>
		</FooterStyled>
	);
};

export default Footer;
