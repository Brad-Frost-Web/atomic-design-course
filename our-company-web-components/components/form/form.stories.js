import "./form.js";
import "../text-field/text-field.js";
import "../textarea-field/textarea-field.js";
import "../button/button.js";

const meta = {
	title: "Components/Form",
	component: "my-form",
	tags: ["autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `
			<my-form>
				<my-text-field type="text" label="Name"></my-text-field>
				<my-text-field type="email" label="Email"></my-text-field>
				<my-textarea-field label="Message" placeholder="Enter your message"></my-textarea-field>
				<my-button type="submit">Submit</my-button>
			</my-form>
		`;
	},
};
