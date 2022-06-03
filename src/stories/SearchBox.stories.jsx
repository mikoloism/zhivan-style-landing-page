import React from 'react';
import SearchBox from '../components/SearchBox';

export default {
	title: 'Atoms/Searchbox',
	component: SearchBox,
};

const Template = (args) => <SearchBox {...args} />;

export const UnFocus = Template.bind({});

export const Focused = Template.bind({});
