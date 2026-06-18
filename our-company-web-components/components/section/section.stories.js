import "./section.js";

const meta = {
	title: "Components/Section",
	component: "my-section",
	tags: ["autodocs"],
	argTypes: {
		heading: {
			control: "text",
			description: "Section heading",
		},
		slot: {
			control: "text",
			description: "Section content",
			name: "Content",
		},
	},
	args: {
		heading: "Section Heading",
		slot: "Section content goes here.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-section heading="${(args.heading || "").replace(/"/g, "&quot;")}">
				<p>${args.slot}</p>
			</my-section>
		`;
	},
};
