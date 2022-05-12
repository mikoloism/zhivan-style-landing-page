import React from 'react';
import classnames from 'classnames';
import { createBem } from './../../utils';

const heading = createBem('headline');

function RenderTitle({ type, text }) {
	return {
		h1: <h1 className={classnames(heading('title', 'h1'))}>{text}</h1>,
		h2: <h2 className={classnames(heading('title', 'h2'))}>{text}</h2>,
		h3: <h3 className={classnames(heading('title', 'h3'))}>{text}</h3>,
		h4: <h4 className={classnames(heading('title', 'h4'))}>{text}</h4>,
		h5: <h5 className={classnames(heading('title', 'h5'))}>{text}</h5>,
		h6: <h6 className={classnames(heading('title', 'h6'))}>{text}</h6>,
	}[type || 'h1'];
}

function RenderDescription({ text }) {
	return <span className={classnames(heading('description'))}>{text}</span>;
}

function Headline({ type, title, description }) {
	return (
		<section className={classnames(heading())}>
			<RenderTitle type={type} text={title} />
			<RenderDescription text={description} />
		</section>
	);
}

export default Headline;
