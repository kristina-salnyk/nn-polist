import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Container } from '../../common/Container';
import { Instagram } from '../../common/Instagram';
import { Facebook } from '../../common/Facebook';
import { LinkedIn } from '../../common/LinkedIn';
import { Telegram } from '../../common/Telegram';
import { Logo } from '../Logo';
import { ROUTES } from '../../constants';

import {
	Contacts,
	FooterColumn,
	FooterContent,
	FooterStyled,
	NavigationStyled,
	Text,
	Title,
	Links,
	FooterWrap,
	Policy,
	FooterContentStyled,
	FooterColumnStyled,
} from './Footer.styled';

const Footer = () => {
	return (
		<FooterStyled>
			<FooterWrap>
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
							<Links>
								<a href='/'>
									<Instagram />
								</a>
								<a href='/'>
									<Facebook />
								</a>
								<a href='/'>
									<LinkedIn />
								</a>
								<a href='/'>
									<Telegram />
								</a>
							</Links>
						</FooterColumn>
						<FooterColumnStyled>
							<Title>Site navigation</Title>
							<NavigationStyled />
						</FooterColumnStyled>
						<FooterColumn>
							<Title>Contact information</Title>
							<Contacts>
								<a href='mailto:nn.polist@gmail.com'>
									<FiMail size={16} style={{ minWidth: '16' }} />
									nn.polist@gmail.com
								</a>
								<a href='tel:+48530751528'>
									<FiPhone size={16} style={{ minWidth: '16' }} />
									+48 530 751 528
								</a>
								<a
									href='https://goo.gl/maps/PiVUraL2GpMWsWh4A'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiMapPin size={16} style={{ minWidth: '16' }} />
									Jana Sobieskiego 11, 43-300 Bielsko-Biala, Poland
								</a>
							</Contacts>
						</FooterColumn>
					</FooterContent>
				</Container>
			</FooterWrap>
			<Container>
				<FooterContentStyled>
					<FooterColumn>
						<Text>
							Copyright &copy; N.N. Polist, 2023. All rights reserved.
						</Text>
					</FooterColumn>
					<FooterColumn>
						<Policy>
							<a href='/'>Website Terms</a>
							<a href='/'>Privacy Policy</a>
							<a href='/'>Cookies Policy</a>
						</Policy>
					</FooterColumn>
				</FooterContentStyled>
			</Container>
		</FooterStyled>
	);
};

export default Footer;
