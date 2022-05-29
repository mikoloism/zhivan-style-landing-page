import React from 'react';
import FavoriteSection from '../components/FavoriteSection';

export default {
	title: 'Organs/FavoriteSection',
	component: FavoriteSection,
};

const Template = (args) => <FavoriteSection {...args} />;

export const index = Template.bind({});
index.args = {};
