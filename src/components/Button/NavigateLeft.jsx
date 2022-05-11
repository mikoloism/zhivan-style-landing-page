import React from 'react';
import Button from './Button';
import classnames from 'classnames';
import { IChevronLeft } from './../Icon';
import { createBem } from './../../utils';

function NavigateLeft() {
	const navigate = createBem('navigate');

	return (
		<Button className={classnames(navigate(null, 'left'))}>
			<IChevronLeft className={navigate('icon')} />
		</Button>
	);
}

export default NavigateLeft;
