import React from 'react';
import Avatar from './../components/Avatar';

export default {
	title: 'Atoms/Avatar',
	component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const index = Template.bind({});
index.args = {};
