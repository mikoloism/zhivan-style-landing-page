import React from 'react';
import Navigation from './../components/Navigation';

export default {
	title: 'Atoms/Navigation',
	component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const index = Template.bind({});
index.args = {};
