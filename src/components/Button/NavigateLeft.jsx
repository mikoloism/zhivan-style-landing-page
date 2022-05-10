import React from 'react';
import classnames from 'classnames';
import { IChevronLeft } from './../Icon';
import { createBem } from './../../utils';

function NavigateLeft() {
	const navigate = createBem('navigate');

	return (
		<button type='button' className={classnames(navigate(null, 'left'))}>
			<IChevronLeft className={navigate('icon')} />
		</button>
	);
}

export default NavigateLeft;
