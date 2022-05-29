import React from 'react';
import { createBem } from './../../utils';

import Image from '../Image';
import { Buy } from '../Button';
import Headline from '../Headline';

function CoverLink({ href, text }) {
	// { text } in styling should colored transparent
	return (
		<a className='hidden-link' href={href}>
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
			<CoverLink href={`#/products/${id}`} text={name} />
			<Image
				src={thumbnail}
				className={product('thumbnail')}
				alt={`Zhivan Style | ${name} | ${description}`}
			/>
			<section className={product('details')}>
				<Headline type='h2' title={name} description={description} />
				<Buy />
			</section>
		</section>
	);
}

export default Product;
