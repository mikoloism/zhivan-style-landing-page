import React from 'react';
import { NavigateRight } from '../components/Button';

export default {
	title: 'Atoms/Button/NavigateRight',
	component: NavigateRight,
};

const Template = (args) => <NavigateRight {...args} />;

export const index = Template.bind({});
index.args = { click: () => {} };
