import "./section.js";

const meta = {
	title: "Components/Section",
	component: "my-section",
	tags: ["autodocs"],
	argTypes: {
		heading: {
			control: "text",
			description: "Section heading",
		},
		variant: {
			control: "select",
			options: ["", "band"],
			description: "Section spacing variant",
		},
		slot: {
			control: "text",
			description: "Section content",
			name: "Content",
		},
	},
	args: {
		heading: "Section Heading",
		variant: "",
		slot: "Section content goes here.",
	},
};

export default meta;

export const Default = {
	render: (args) => {
		const variantAttr = args.variant === "band" ? ' variant="band"' : "";
		return `
			<my-section heading="${(args.heading || "").replace(/"/g, "&quot;")}"${variantAttr}>
				<p>${args.slot}</p>
			</my-section>
		`;
	},
};

export const Band = {
	render: (args) => {
		return `
			<my-section heading="${(args.heading || "").replace(/"/g, "&quot;")}" variant="band">
				<p>${args.slot}</p>
			</my-section>
		`;
	},
};
