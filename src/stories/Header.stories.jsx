import React from 'react';
import Header from './../components/Header';

export default {
	title: 'Organs/Header',
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const index = Template.bind({});
index.args = {};
