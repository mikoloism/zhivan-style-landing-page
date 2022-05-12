import React from 'react';
import { Headline } from './../components/Headline';

export default {
	title: 'Atoms/Headlines',
	component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const H1 = Template.bind({});
H1.args = {
	type: 'h1',
	title: 'محبوب ترین های ماه',
	description: 'most popular of the month',
};
