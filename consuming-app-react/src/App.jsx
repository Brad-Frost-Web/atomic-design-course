export default function App() {
	return (
		<>
			<my-header className="u-margin-bottom-48"></my-header>

			<main className="main">
				<my-layout-container>
					<my-hero className="u-margin-bottom-64"></my-hero>
					<section className="section u-margin-bottom-18">
						<my-heading tag-name="h2" variant="title" className="section__heading">
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
						<section className="section">
							<my-heading tag-name="h2" variant="title" className="u-margin-bottom-16">
								Stay Updated
							</my-heading>
							<my-text-passage className="u-margin-bottom-32">
								Subscribe to our newsletter to receive the latest news and
								updates.
							</my-text-passage>
							<form className="newsletter-form">
								<my-text-field
									type="email"
									placeholder="Enter your email"
									className="newsletter-form__text-field"
								></my-text-field>
								<my-button type="submit">Subscribe</my-button>
							</form>
						</section>
					</my-layout-container>
				</my-band>
			</main>

			<my-footer></my-footer>
		</>
	);
}
