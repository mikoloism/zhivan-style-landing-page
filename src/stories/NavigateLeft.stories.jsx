import React from 'react';
import { NavigateLeft } from './../components/Button';

export default {
	title: 'Atoms/Button/NavigateLeft',
	component: NavigateLeft,
};

const Template = (args) => <NavigateLeft {...args} />;

export const index = Template.bind({});
index.args = { click: () => {} };
