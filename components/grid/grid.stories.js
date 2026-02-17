import "./grid.js";
import "../card/card.js";
import "../heading/heading.js";
import "../text-passage/text-passage.js";

const meta = {
	title: "Components/Grid",
	component: "my-grid",
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["", "3up"],
			description: "Grid variant",
		},
	},
	args: {
		variant: "",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-grid variant="${args.variant}">
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
			</my-grid>
		`;
	},
};

export const ThreeUp = {
	args: {
		variant: "3up",
	},
	render: (args) => {
		return `
			<my-grid variant="${args.variant}">
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
				<my-card heading="Heading" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
				</my-card>
			</my-grid>
		`;
	},
};
