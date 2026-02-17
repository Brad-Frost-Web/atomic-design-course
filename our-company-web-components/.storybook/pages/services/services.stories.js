import "../../../components/header/header.js";
import "../../../components/layout-container/layout-container.js";
import "../../../components/page-header/page-header.js";
import "../../../components/card/card.js";
import "../../../components/grid/grid.js";
import "../../../components/button/button.js";
import "../../../components/footer/footer.js";
import "@brad-frost/our-company-app/styles.css";

const meta = {
	title: "Pages/Services",
	tags: ["!autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `
			<my-header class="u-margin-bottom-24"></my-header>
			<main class="main u-margin-bottom-72">
				<my-layout-container>
					<my-page-header
						class="u-margin-bottom-16"
						heading="Services"
						description="We offer a comprehensive range of services designed to meet your needs. Our team of experts is dedicated to delivering high-quality solutions that drive results."
					></my-page-header>
					<my-grid variant="3up" class="u-margin-bottom-16">
						<my-card
							heading="Service One"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
						<my-card
							heading="Service Two"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
						<my-card
							heading="Service Three"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
						<my-card
							heading="Service Four"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
						<my-card
							heading="Service Five"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
						<my-card
							heading="Service Six"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						></my-card>
					</my-grid>
					<my-button> Interested? Get in touch! </my-button>
				</my-layout-container>
			</main>

			<my-footer></my-footer>
		`;
	},
};
