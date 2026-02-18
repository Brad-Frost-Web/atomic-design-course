import "./layout-container.js";

const meta = {
	title: "Components/LayoutContainer",
	component: "my-layout-container",
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["", "narrow"],
			description: "Container width variant",
		},
		slot: {
			control: "text",
			description: "Content inside the container",
			name: "Content",
		},
	},
	args: {
		variant: "",
		slot: "Layout container content. Use the variant control to switch between default and narrow width.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		const variantAttr = args.variant === "narrow" ? ' variant="narrow"' : "";
		return `
			<my-layout-container${variantAttr}>
				<p>${args.slot}</p>
			</my-layout-container>
		`;
	},
};

export const Narrow = {
	render: (args) => {
		return `
			<my-layout-container variant="narrow">
				<p>${args.slot}</p>
			</my-layout-container>
		`;
	},
};
