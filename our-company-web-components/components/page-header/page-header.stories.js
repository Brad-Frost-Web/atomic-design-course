import "./page-header.js";

const meta = {
	title: "Components/PageHeader",
	component: "my-page-header",
	tags: ["autodocs"],
	argTypes: {
		heading: {
			control: "text",
			description: "Page title",
		},
		description: {
			control: "text",
			description: "Optional description below the heading",
		},
	},
	args: {
		heading: "Page Title",
		description: "A short description of the page content.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-page-header
				heading="${(args.heading || "").replace(/"/g, "&quot;")}"
				description="${(args.description || "").replace(/"/g, "&quot;")}"
			></my-page-header>
		`;
	},
};
