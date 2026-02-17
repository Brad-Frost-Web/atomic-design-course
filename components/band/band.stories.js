import "./band.js";
import "../layout-container/layout-container.js";

const meta = {
	title: "Components/Band",
	component: "my-band",
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		slot: {
			control: "text",
			description: "Band content",
			name: "Content",
		},
	},
	args: {
		slot: "Band content goes in the default slot. This is a simple container with brand background and vertical padding.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-band>
			<my-layout-container>
				<p>${args.slot}</p>
				</my-layout-container>
			</my-band>
		`;
	},
};
