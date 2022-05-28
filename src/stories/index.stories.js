import React from 'react';
import {
	Cart as CartComponent,
	More as MoreComponent,
	Buy as BuyComponent,
	NavigateLeft as NavigateLeftComponent,
	NavigateRight as NavigateRightComponent,
} from './../components/Button';

import SearchBoxComponent from '../components/SearchBox';
import AvatarComponent from '../components/Avatar';
import NavigationComponent from '../components/Navigation';
import HeaderComponent from '../components/Header';

export default {
	title: 'Components/index',
	component: (
		<>
			<div></div>
		</>
	),
};

export const Buy = () => <BuyComponent />;
export const Cart = () => <CartComponent />;
export const More = () => <MoreComponent />;
export const NavigateRight = () => <NavigateRightComponent />;
export const NavigateLeft = () => <NavigateLeftComponent />;

export const SearchBox = () => <SearchBoxComponent />;
export const Avatar = () => <AvatarComponent />;
export const Navigation = () => <NavigationComponent />;
export const Header = () => <HeaderComponent />;
