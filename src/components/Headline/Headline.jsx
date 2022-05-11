import React from 'react';
import classnames from 'classnames';
import { createBem } from './../../utils';

class Headline extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
		this.heading = createBem('headline');
	}

	renderH1(text) {
		return (
			<h1 className={classnames(this.heading('title', 'h1'))}>{text}</h1>
		);
	}
	renderH2(text) {
		return (
			<h2 className={classnames(this.heading('title', 'h2'))}>{text}</h2>
		);
	}
	renderH3(text) {
		return (
			<h3 className={classnames(this.heading('title', 'h3'))}>{text}</h3>
		);
	}
	renderH4(text) {
		return (
			<h4 className={classnames(this.heading('title', 'h4'))}>{text}</h4>
		);
	}
	renderH5(text) {
		return (
			<h5 className={classnames(this.heading('title', 'h5'))}>{text}</h5>
		);
	}
	renderH6(text) {
		return (
			<h6 className={classnames(this.heading('title', 'h6'))}>{text}</h6>
		);
	}
	renderTitle(type, text) {
		switch (type) {
			case '1':
			case 'h1':
				return this.renderH1(text);

			case '2':
			case 'h2':
				return this.renderH2(text);

			case '3':
			case 'h3':
				return this.renderH3(text);

			case '4':
			case 'h4':
				return this.renderH4(text);

			case '5':
			case 'h5':
				return this.renderH5(text);

			case '6':
			case 'h6':
				return this.renderH6(text);

			default:
				return this.renderH1(text);
		}
	}

	renderDescription(description) {
		return (
			<span className={classnames(this.heading('description'))}>
				{description}
			</span>
		);
	}

	render() {
		return (
			<section className={classnames(this.heading())}>
				{this.renderTitle(this.props.type, this.props.title)}
				{this.renderDescription(this.props.description)}
			</section>
		);
	}
}

export default Headline;
