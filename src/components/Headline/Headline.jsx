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
		return [
			this.renderH1,
			this.renderH2,
			this.renderH3,
			this.renderH4,
			this.renderH5,
			this.renderH6,
		][parseInt(type) || 0](text);
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
