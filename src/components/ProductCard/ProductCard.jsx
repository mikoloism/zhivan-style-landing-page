import React from 'react';
import { createBem } from './../../utils';
import classnames from 'classnames';

import Image from '../Image';
import { Buy } from '../Button';
import Headline from '../Headline';
import thumbImage from '../../assets/images/image-style(3).png';

function CoverLink({ href, text, className }) {
	// { text } in styling should colored transparent
	return (
		<a className={classnames(className, 'hidden-link')} href={href}>
			{text}
		</a>
	);
}

/**
HINT : structure
- wrapper
	- link(to-see-product)
	- thumbnail
		- image
	- details
		- title
		- description
		- link(add-to-cart)
 **/

function Product({ className, thumbnail, name, description, id }) {
	const product = createBem('product');

	return (
		<section className={product()}>
			<CoverLink
				className={product('link')}
				href={`#/products/${id}`}
				text={name}
			/>
			<Image
				src={thumbnail}
				className={product('thumbnail')}
				alt={`Zhivan Style | ${name} | ${description}`}
			/>
			<section className={product('details')}>
				<Headline type='h5' title={name} description={description} />
				<Buy className={product('buy')} />
			</section>
		</section>
	);
}

Product.defaultProps = {
	name: 'تونیک زنانه گلدار',
	description: "Floral women's tonic",
	thumbnail: thumbImage,
};

export default Product;
