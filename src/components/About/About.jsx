import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import aboutUsInterview from '../../assets/img/about-us-interview.jpeg';
import aboutUsWork from '../../assets/img/about-us-work.jpeg';
import { ROUTES } from '../../constants';

import {
	AboutContent,
	Accent,
	BackImage,
	ButtonStyled,
	FrontImage,
	Images,
	SubTitle,
	Text,
} from './About.styled';

const About = () => {
	const navigate = useNavigate();

	return (
		<section>
			<Container>
				<AboutContent>
					<Images>
						<BackImage src={aboutUsInterview} />
						<FrontImage src={aboutUsWork} />
					</Images>
					<Text>
						<SectionTitle>
							<Accent>About </Accent> N.N. Polist
						</SectionTitle>
						<SubTitle>
							We are here to assist you <Accent>in recruiting</Accent>
						</SubTitle>
						<p>
							<Accent>N.N. Polist</Accent> is a recruitment agency that
							specializes in finding skilled workers for factories in various
							industries.
						</p>
						<p>
							We work with manufacturing companies to identify their staffing
							needs and source candidates with the necessary qualifications and
							experience. Our recruitment solutions are customized to meet the
							specific needs of each client.
						</p>
						<p>
							We are committed to building long-lasting relationships and
							providing exceptional service that exceeds expectations. Our goal
							is to help clients build high-performing teams that can thrive in
							today&#39;s competitive market.
						</p>
						<p>
							Explore <Accent>our services</Accent> to achieve{' '}
							<Accent>your goals.</Accent>
						</p>
						<ButtonStyled
							type='button'
							text='Learn more'
							onClick={() => {
								navigate(ROUTES.ABOUT_US);
							}}
						/>
					</Text>
				</AboutContent>
			</Container>
		</section>
	);
};

export default About;
