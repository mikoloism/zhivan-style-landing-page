import React from 'react';
import Button from './Button';
import classnames from 'classnames';
import { IChevronRight } from './../Icon';
import { createBem } from './../../utils';

function NavigateRight({ click, className }) {
	const navigate = createBem('navigate');

	return (
		<Button
			onClick={click}
			className={classnames(navigate(null, 'right'), className)}>
			<IChevronRight className={navigate('icon')} />
		</Button>
	);
}

export default NavigateRight;
