import React from 'react';
import { Link } from '../components/Button';

export default {
	title: 'Atoms/Button/Link',
	component: Link,
};

const Template = (args) => <Link {...args} />;

export const AboutUs = Template.bind({});
AboutUs.args = { children: 'درباره ما' };

export const MoreProducts = Template.bind({});
MoreProducts.args = { children: 'مشاهده محصولات' };
