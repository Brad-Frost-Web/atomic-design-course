import "./text-field.js";

const meta = {
	title: "Components/TextField",
	component: "my-text-field",
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: "text",
			description: "Label for the input",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text",
		},
		type: {
			control: "select",
			options: ["text", "email", "password", "search", "tel", "url"],
			description: "Input type",
		},
	},
	args: {
		label: "Email",
		placeholder: "you@example.com",
		type: "text",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-text-field
				label="${(args.label || "").replace(/"/g, "&quot;")}"
				placeholder="${(args.placeholder || "").replace(/"/g, "&quot;")}"
				type="${args.type || "text"}"
			></my-text-field>
		`;
	},
};
