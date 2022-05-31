import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createBem } from './../../utils';
import image from './../../assets/images/image-style(3).png';

function Picture() {
	return (
		<picture>
			<img src={image} alt='style | zhivan style' />
		</picture>
	);
}

function Image({ src, alt, className }) {
	const cover = createBem('cover');

	return (
		<figure className={classnames(className, cover())}>
			<img className={cover('image')} src={src} alt={alt} />
		</figure>
	);
}

Image.propTypes = {
	src: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.elementType,
		PropTypes.element,
	]),
	alt: PropTypes.string,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			figure: PropTypes.string,
			img: PropTypes.string,
		}),
	]),
};

Image.defaultProps = {
	src: image,
	alt: 'zhivan style | clothes code #01',
};

export default Image;
export { Picture };
