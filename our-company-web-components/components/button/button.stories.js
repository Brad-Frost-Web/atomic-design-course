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
		disabled: {
			control: "boolean",
			description: "Disabled state",
		},
		slot: {
			control: "text",
			description: "Button text",
			name: "slot",
		},
	},
	args: {
		type: "button",
		disabled: false,
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

export const Disabled = {
	args: {
		disabled: true,
		slot: "Button",
	},
	render: (args) => {
		return `
			<my-button type="${args.type}" disabled>${args.slot}</my-button>
		`;
	},
};
