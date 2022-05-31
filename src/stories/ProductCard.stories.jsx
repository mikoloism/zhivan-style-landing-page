import ProductCard from '../components/ProductCard';

export default {
	title: 'Atoms/ProductCard',
	component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const index = Template.bind({});
