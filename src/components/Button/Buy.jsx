import React from 'react';
import classnames from 'classnames';
import { ICart } from '../Icon';
import { createBem } from '../../utils';

class BuyButton extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
	}

	handleClick(e) {
		this.props.click(e);
	}

	render() {
		const buy = createBem('buy');
		return (
			<button
				type='button'
				className={classnames(buy(), this.props.className)}
				onClick={this.handleClick.bind(this)}>
				<ICart className={buy('icon')} />
			</button>
		);
	}
}

export default BuyButton;
