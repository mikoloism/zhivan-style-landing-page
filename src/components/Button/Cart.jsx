import React from 'react';
import classnames from 'classnames';
import { ICart } from '../Icon';
import { createBem } from './../../utils';

function CartButton({ className, click, url }) {
	const cart = createBem('cart');
	return (
		<a href={url || '#'} className={classnames(cart(), className)}>
			<ICart className={cart('icon')} />
		</a>
	);
}

export default CartButton;
