import React from 'react';
import { Headline } from './../components/Headline';

export default {
	title: 'Atoms/Headlines',
	component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const H2 = Template.bind({});
H2.args = {
	type: 'h2',
	title: ' !!! الان بخــــر، شش مــاه دیـگــه پولشـــو بــده',
	description: 'Payment after 6 months',
};

export const H3 = Template.bind({});
H3.args = {
	type: 'h3',
	title: 'دستـه بنـدی ها',
	description: 'most popular of the month',
};

export const H4 = Template.bind({});
H4.args = {
	type: 'h4',
	title: 'تونیک زنانه گلدار',
	description: "Floral women's tonic",
};
