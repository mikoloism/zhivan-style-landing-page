import React from 'react';
import { createBem } from '../../utils';
import avatarImage from './../../assets/images/avatar.png';

function Avatar({ className, displayName = 'علی اسدپور' }) {
	const avatar = createBem('avatar');
	return (
		<figure className={avatar()}>
			<img
				className={avatar('image')}
				src={avatarImage}
				alt={`zhivan style | ${displayName}`}
			/>
			<figcaption className={avatar('name')}>{displayName}</figcaption>
		</figure>
	);
}

export default Avatar;
