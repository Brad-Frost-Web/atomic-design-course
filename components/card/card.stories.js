import "./card.js";

const meta = {
	title: "Components/Card",
	component: "my-card",
	tags: ["autodocs"],
	argTypes: {
		heading: {
			control: "text",
			description: "Card title",
		},
		description: {
			control: "text",
			description: "Card body text",
		},
	},
	args: {
		heading: "Card Title",
		description: "Card description or body copy goes here.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-card
				heading="${(args.heading || "").replace(/"/g, "&quot;")}"
				description="${(args.description || "").replace(/"/g, "&quot;")}"
			></my-card>
		`;
	},
};
