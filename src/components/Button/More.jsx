import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createBem } from './../../utils';
import { IChevronLeft } from './../Icon';

function MoreButton({ className, url, text }) {
	const more = createBem('more');
	return (
		<a href={url || '#'} className={classnames(more(), className)}>
			<span className={more('text')}>{text}</span>
			<IChevronLeft className={more('icon')} />
		</a>
	);
}

MoreButton.propTypes = {
	text: PropTypes.string,
	url: PropTypes.string,
	className: PropTypes.string,
};

MoreButton.defaultProps = {
	text: 'مشاهده همه',
	url: '#',
};

export default MoreButton;
