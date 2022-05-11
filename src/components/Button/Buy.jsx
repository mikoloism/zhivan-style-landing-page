import React from 'react';
import Button from './Button';
import classnames from 'classnames';
import { ICart } from '../Icon';
import { createBem } from '../../utils';

function BuyButton({ className, click }) {
	const buy = createBem('buy');

	function handleClick(e) {
		return click(e);
	}

	return (
		<Button
			className={classnames(buy(), className)}
			onClick={handleClick.bind(this)}>
			<ICart className={buy('icon')} />
		</Button>
	);
}

export default BuyButton;
