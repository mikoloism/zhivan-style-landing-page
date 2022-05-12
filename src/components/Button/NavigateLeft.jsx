import React from 'react';
import Button from './Button';
import classnames from 'classnames';
import { IChevronLeft } from './../Icon';
import { createBem } from './../../utils';

function NavigateLeft({ click, className }) {
	const navigate = createBem('navigate');

	return (
		<Button
			onClick={click}
			className={classnames(navigate(null, 'left'), className)}>
			<IChevronLeft className={navigate('icon')} />
		</Button>
	);
}

export default NavigateLeft;
