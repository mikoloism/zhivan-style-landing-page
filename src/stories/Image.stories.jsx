import React from 'react';
import { Image } from './../components/Image';

import Image1 from './../assets/images/image-style(1).png';
import Image2 from './../assets/images/image-style(2).png';
import Image3 from './../assets/images/image-style(3).png';
import Image4 from './../assets/images/image-style(4).png';
import Image5 from './../assets/images/image-style(5).png';

export default {
	title: 'Atoms/Image',
	component: Image,
};

const Template = (args) => <Image {...args} />;

export const PImage1 = Template.bind({});
PImage1.args = { src: Image1 };

export const PImage2 = Template.bind({});
PImage2.args = { src: Image2 };

export const PImage3 = Template.bind({});
PImage3.args = { src: Image3 };

export const PImage4 = Template.bind({});
PImage4.args = { src: Image4 };

export const PImage5 = Template.bind({});
PImage5.args = { src: Image5 };
