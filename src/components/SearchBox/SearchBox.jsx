import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createBem } from './../../utils';
import { ISearch } from './../Icon';
import './SearchBox.scss';

class SearchBox extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {};
	}

	render() {
		const search = createBem('searchbox');
		return (
			<form className={classnames('searchbox', this.props.className)}>
				<input type='text' className={search('input')} />
				<ISearch className={search('icon')} />
			</form>
		);
	}
}

SearchBox.propTypes = {
	className: PropTypes.string,
};

export default SearchBox;
