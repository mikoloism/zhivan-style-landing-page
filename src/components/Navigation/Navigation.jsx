import React from 'react';
import classnames from 'classnames';
import { createBem } from '../../utils';

const createNav = (text, path, isActive = false) => ({
	text,
	path: path || '#',
	isActive,
});

const navList = [
	createNav('مردانه', '/category/men'),
	createNav('زنانه', '/category/women', true),
	createNav('بچگانه', '/category/children'),
	createNav('زیبایی و سلامت', '/category/health'),
	createNav('برندها', '/brands'),
	createNav('تماس باما', '/contact'),
];

const nav = createBem('navigation');

function NavigationItem({ text, path, isActive }) {
	return (
		<li className={nav('item', isActive && 'active')}>
			<a href={`#${path}`} className={nav('link')}>
				<span className={nav('text')}>{text}</span>
				<span className={nav('text')}>{text}</span>
			</a>
		</li>
	);
}

function Navigation({ className }) {
	return (
		<nav className={classnames(nav(), className)}>
			<ul className={nav('list')}>
				{navList.map((navItem) => {
					return (
						<NavigationItem
							key={navItem.path}
							text={navItem.text}
							path={navItem.path}
							isActive={navItem.isActive}
						/>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
