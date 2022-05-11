import React from 'react';
import classnames from 'classnames';
import { ICart } from '../Icon';
import { createBem } from './../../utils';

function CartButton({ className, click }) {
	const cart = createBem('cart');
	return (
		<a
			href={this.props.url || '#'}
			className={classnames(cart(), this.props.className)}>
			<ICart className={cart('icon')} />
		</a>
	);
}

export default CartButton;
