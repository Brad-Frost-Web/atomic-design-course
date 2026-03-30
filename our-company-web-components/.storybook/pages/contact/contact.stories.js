import "../../../components/header/header.js";
import "../../../components/layout-container/layout-container.js";
import "../../../components/page-header/page-header.js";
import "../../../components/text-field/text-field.js";
import "../../../components/textarea-field/textarea-field.js";
import "../../../components/button/button.js";
import "../../../components/footer/footer.js";
import "@brad-frost-web/atomic-design-course-demo-app/styles.css";

const meta = {
	title: "Pages/Contact",
	tags: ["!autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `
			<my-header class="u-margin-bottom-24"></my-header>

			<main class="main u-margin-bottom-72">
				<my-layout-container variant="narrow">
					<my-page-header
						class="u-margin-bottom-32"
						heading="Contact us"
					></my-page-header>
					<form class="form">
						<my-text-field type="text" id="name" label="Name"></my-text-field>
						<my-text-field type="email" id="email" label="Email"></my-text-field>
						<my-textarea-field
							placeholder="Enter your message"
							id="message"
							label="Your Message"
						></my-textarea-field>
						<my-button type="submit">Submit</my-button>
					</form>
				</my-layout-container>
			</main>

			<my-footer></my-footer>
		`;
	},
};
