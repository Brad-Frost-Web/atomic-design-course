import "../../../components/header/header.js";
import "../../../components/hero/hero.js";
import "../../../components/band/band.js";
import "../../../components/layout-container/layout-container.js";
import "../../../components/heading/heading.js";
import "../../../components/text-passage/text-passage.js";
import "../../../components/text-field/text-field.js";
import "../../../components/button/button.js";
import "../../../components/card/card.js";
import "../../../components/grid/grid.js";
import "../../../components/footer/footer.js";
import "@brad-frost-web/atomic-design-course-demo-app/styles.css";

const meta = {
	title: "Pages/Homepage",
	tags: ["!autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `
			<my-header class="u-margin-bottom-48"></my-header>

			<main class="main">
				<my-layout-container>
					<my-hero class="u-margin-bottom-64"></my-hero>
					<section class="section u-margin-bottom-18">
						<my-heading tag-name="h2" variant="title" class="section__heading">
							Why Choose Us
						</my-heading>
						<my-grid variant="3up">
							<my-card
								heading="Feature One"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
							></my-card>
							<my-card
								heading="Feature Two"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
							></my-card>
							<my-card
								heading="Feature Three"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
							></my-card>
						</my-grid>
					</section>
				</my-layout-container>

				<my-band>
					<my-layout-container>
						<section class="section">
							<my-heading tag-name="h2" variant="title" class="u-margin-bottom-16">
								Stay Updated
							</my-heading>
							<my-text-passage class="u-margin-bottom-32">
								Subscribe to our newsletter to receive the latest news and
								updates.
							</my-text-passage>
							<form class="newsletter-form">
								<my-text-field
									type="email"
									placeholder="Enter your email"
									class="newsletter-form__text-field"
								></my-text-field>
								<my-button type="submit" class="button">Subscribe</my-button>
							</form>
						</section>
					</my-layout-container>
				</my-band>
			</main>

			<my-footer></my-footer>
		`;
	},
};
