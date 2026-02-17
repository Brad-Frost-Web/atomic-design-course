import "./heading.js";

const meta = {
	title: "Components/Heading",
	component: "my-heading",
	tags: ["autodocs"],
	argTypes: {
		tagName: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
			description: "HTML heading level",
		},
		variant: {
			control: "select",
			options: ["title", "title-lg", "title-sm"],
			description: "Visual style variant",
		},
		slot: {
			control: "text",
			description: "Heading text",
			name: "Text",
		},
	},
	args: {
		tagName: "h2",
		variant: "title",
		slot: "Heading",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		return `
			<my-heading tag-name="${args.tagName}" variant="${args.variant}">
				${args.slot}
			</my-heading>
		`;
	},
};

export const TitleLg = {
	args: {
		tagName: "h1",
		variant: "title-lg",
		slot: "Large title heading",
	},
	render: (args) => {
		return `
			<my-heading tag-name="${args.tagName}" variant="${args.variant}">
				${args.slot}
			</my-heading>
		`;
	},
};

export const Title = {
	args: {
		tagName: "h2",
		variant: "title",
		slot: "Default title heading",
	},
	render: (args) => {
		return `
			<my-heading tag-name="${args.tagName}" variant="${args.variant}">
				${args.slot}
			</my-heading>
		`;
	},
};

export const TitleSm = {
	args: {
		tagName: "h3",
		variant: "title-sm",
		slot: "Small title heading",
	},
	render: (args) => {
		return `
			<my-heading tag-name="${args.tagName}" variant="${args.variant}">
				${args.slot}
			</my-heading>
		`;
	},
};
