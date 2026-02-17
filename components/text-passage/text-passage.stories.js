import "./text-passage.js";

const meta = {
	title: "Components/TextPassage",
	component: "my-text-passage",
	tags: ["autodocs"],
	argTypes: {
		slot: {
			control: "text",
			description: "Body content",
			name: "Content",
		},
	},
	args: {
		slot: "This is a text passage for body copy. It can contain multiple sentences and paragraphs when used with rich content.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-text-passage>${args.slot}</my-text-passage>
		`;
	},
};
