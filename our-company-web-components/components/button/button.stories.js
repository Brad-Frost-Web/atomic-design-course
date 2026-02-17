import "./button.js";

const meta = {
	title: "Components/Button",
	component: "my-button",
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["button", "submit", "reset"],
			description: "Native button type",
		},
		slot: {
			control: "text",
			description: "Button text",
			name: "slot",
		},
	},
	args: {
		type: "button",
		slot: "Button",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-button type="${args.type}">${args.slot}</my-button>
		`;
	},
};
