import React from 'react';
import { createBem } from './../../utils';

import Avatar from './../Avatar';
import Navigation from './../Navigation';
import SearchBox from './../SearchBox';
import { Cart } from './../Button';

function Header() {
	const header = createBem('header');
	return (
		<header className={header()}>
			<section className={header('center')}>
				<h1 className={header('title')}>ZHIVAN STYLE</h1>
				<Navigation className={header('navigation')} />
			</section>
			<section className={header('left')}>
				<Cart className={header('cart')} />
				<SearchBox className={header('searchbox')} />
			</section>
			<section className={header('right')}>
				<Avatar className={header('avatar')} />
			</section>
		</header>
	);
}

export default Header;
