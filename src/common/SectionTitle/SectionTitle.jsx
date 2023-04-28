import React from 'react';
import PropTypes from 'prop-types';

import { Title, TitleWrap } from './SectionTitle.styled';

const SectionTitle = ({ children }) => {
	return (
		<TitleWrap>
			<Title>{children}</Title>
		</TitleWrap>
	);
};

export default SectionTitle;

SectionTitle.propTypes = {
	children: PropTypes.node.isRequired,
};
