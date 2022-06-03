import React from 'react';
import { createBem } from './../../utils';

import { More } from './../Button';
import Headline from './../Headline';
import Product from '../ProductCard';

import image1 from './../../assets/images/image-style(1).png';
import image2 from './../../assets/images/image-style(2).png';
import image3 from './../../assets/images/image-style(3).png';

function Horizontally() {
	return <span className='line'></span>;
}

const API_RES = [
	{
		thumbnail: image1,
		name: 'تونیک زنانه گلدار',
		description: "Floral women's tonic",
		id: 1,
	},
	{
		thumbnail: image2,
		name: 'تونیک حریر گلدار',
		description: 'Floral silk tonic',
		id: 2,
	},
	{
		thumbnail: image3,
		name: 'تونیک حریر گلدار',
		description: 'Floral silk tonic',
		id: 3,
	},
];

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
				{API_RES.map((res) => {
					return (
						<Product
							className={fav('product')}
							thumbnail={res.thumbnail}
							name={res.name}
							description={res.description}
							key={res.id}
							id={res.id}
						/>
					);
				})}
			</section>
		</section>
	);
}

export default FavoriteSection;
