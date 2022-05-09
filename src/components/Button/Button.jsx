import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ICart } from './../Icon';

class Button extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<button
				onClick={this.props.click.bind(this)}
				type='button'
				className={classnames(
					'addToCart',
					{
						'addToCart--rounded': this.props.rounded,
					},
					this.props.className,
				)}>
				<ICart className='addToCart__icon' />
			</button>
		);
	}
}

Button.propTypes = {
	click: PropTypes.func,
	rounded: PropTypes.bool,
	className: PropTypes.string,
};

Button.defaultProps = {
	click: () => {},
	rounded: true,
};

export default Button;
