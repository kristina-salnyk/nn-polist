import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../common/Container';

import {
	AccentText,
	ButtonStyled,
	HeroContent,
	HeroStyled,
	Text,
	Title,
} from './Hero.styled';
import { ROUTES } from '../../constants';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<HeroStyled>
			<Container>
				<HeroContent>
					<p>
						Welcome to <AccentText>N.N. Polist</AccentText>
					</p>
					<Title>Find a job and become a professional</Title>
					<Text>
						Explore our job opportunities with all the information you need, and
						manage all your job applications from start to finish.
					</Text>
					<ButtonStyled
						type='button'
						text='Find job'
						onClick={() => {
							navigate(ROUTES.FIND_JOB);
						}}
					/>
				</HeroContent>
			</Container>
		</HeroStyled>
	);
};

export default Hero;
