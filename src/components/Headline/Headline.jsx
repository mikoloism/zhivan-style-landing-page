import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createBem } from './../../utils';

const heading = createBem('headline');

function RenderTitle({ type, text }) {
	return {
		h1: <h1 className={classnames(heading('title'))}>{text}</h1>,
		h2: <h2 className={classnames(heading('title'))}>{text}</h2>,
		h3: <h3 className={classnames(heading('title'))}>{text}</h3>,
		h4: <h4 className={classnames(heading('title'))}>{text}</h4>,
		h5: <h5 className={classnames(heading('title'))}>{text}</h5>,
		h6: <h6 className={classnames(heading('title'))}>{text}</h6>,
	}[type || 'h1'];
}

function RenderDescription({ text }) {
	return <span className={classnames(heading('description'))}>{text}</span>;
}

function Headline({ type, title, description }) {
	return (
		<section className={classnames(heading(null, type))}>
			<RenderTitle type={type} text={title} />
			<RenderDescription text={description} />
		</section>
	);
}

Headline.propTypes = {
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	title: PropTypes.string,
	description: PropTypes.string,
};

Headline.defaultProps = {
	type: 'h3',
};

export default Headline;
