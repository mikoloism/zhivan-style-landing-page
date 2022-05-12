import React from 'react';
import { Cart } from '../components/Button';

export default {
	title: 'Atoms/Button/Cart',
	component: Cart,
};

const Template = (args) => <Cart {...args} />;

export const index = Template.bind({});
index.args = {};
