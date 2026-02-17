import "./textarea-field.js";

const meta = {
	title: "Components/TextareaField",
	component: "my-textarea-field",
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: "text",
			description: "Label for the textarea",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text",
		},
	},
	args: {
		label: "Message",
		placeholder: "Enter your message...",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-textarea-field
				label="${(args.label || "").replace(/"/g, "&quot;")}"
				placeholder="${(args.placeholder || "").replace(/"/g, "&quot;")}"
			></my-textarea-field>
		`;
	},
};
