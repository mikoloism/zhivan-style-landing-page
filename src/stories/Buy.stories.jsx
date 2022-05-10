import React from 'react';
import { Buy } from '../components/Button';

export default {
	title: 'Atoms/Button/Buy',
	component: Buy,
};

const Template = (args) => <Buy {...args} />;

export const index = Template.bind({});
index.args = { click: () => {} };
