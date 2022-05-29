import React from 'react';
import { createBem } from './../../utils';

import { More } from './../Button';
import Headline from './../Headline';
import Image from '../Image';

import image1 from './../../assets/images/image-style(1).png';
import image2 from './../../assets/images/image-style(2).png';
import image3 from './../../assets/images/image-style(3).png';

function Horizontally() {
	return <span className='line'></span>;
}

function FavoriteSection({ className }) {
	const fav = createBem('favorite');
	return (
		<section className={fav()}>
			<More />
			<Horizontally />
			<Headline
				type='h2'
				title='محبوب ترین های ماه'
				description='most popular of the month'
			/>
			<section className={fav('images')}>
				<Image src={image1} />
				<Image src={image2} />
				<Image src={image3} />
			</section>
		</section>
	);
}

export default FavoriteSection;
