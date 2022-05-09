import React from 'react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Atoms/Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const UnRounded = Template.bind({});
UnRounded.args = {
	rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
	rounded: true,
};
