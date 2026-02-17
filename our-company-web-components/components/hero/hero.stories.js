import "./hero.js";

const meta = {
	title: "Components/Hero",
	component: "my-hero",
	tags: ["autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `<my-hero></my-hero>`;
	},
};
