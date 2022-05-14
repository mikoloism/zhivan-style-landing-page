import React from 'react';
import classnames from 'classnames';

function Link({ className, href, children }) {
	return (
		<a href={href} className={classnames('link', className)}>
			{children}
		</a>
	);
}

export default Link;
