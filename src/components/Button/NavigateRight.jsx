import React from 'react';
import Button from './Button';
import classnames from 'classnames';
import { IChevronRight } from './../Icon';
import { createBem } from './../../utils';

function NavigateRight() {
	const navigate = createBem('navigate');

	return (
		<Button className={classnames(navigate(null, 'right'))}>
			<IChevronRight className={navigate('icon')} />
		</Button>
	);
}

export default NavigateRight;
