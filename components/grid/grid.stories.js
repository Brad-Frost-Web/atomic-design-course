import "./grid.js";
import "../card/card.js";
import "../heading/heading.js";
import "../text-passage/text-passage.js";

const meta = {
	title: "Components/Grid",
	component: "my-grid",
	tags: ["autodocs"],
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-grid>
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
