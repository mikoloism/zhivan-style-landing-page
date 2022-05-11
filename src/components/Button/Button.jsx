import React from 'react';

function Button({ className, click, children }) {
	function handleClick(e) {
		return click.call(this, e);
	}

	return (
		<button
			type='button'
			className={className}
			onClick={handleClick.bind(this)}>
			{children}
		</button>
	);
}

export default Button;
