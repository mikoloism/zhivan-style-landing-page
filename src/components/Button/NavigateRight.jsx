import React from 'react';
import classnames from 'classnames';
import { IChevronRight } from './../Icon';
import { createBem } from './../../utils';

function NavigateRight() {
	const navigate = createBem('navigate');

	return (
		<button type='button' className={classnames(navigate(null, 'right'))}>
			<IChevronRight className={navigate('icon')} />
		</button>
	);
}

export default NavigateRight;
