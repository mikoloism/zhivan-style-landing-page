import ProductCard from '../components/ProductCard';
import image2 from '../assets/images/image-style(7).png';

export default {
	title: 'Atoms/ProductCard',
	component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const index = Template.bind({});
index.args = { round: false, thumbnail: image2 };

export const rounded = Template.bind({});
rounded.args = { round: true };
