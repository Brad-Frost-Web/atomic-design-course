export default function App() {
	return (
		<>
			<my-header className="u-margin-bottom-48"></my-header>

			<main className="main">
				<my-layout-container>
					<my-hero className="u-margin-bottom-64"></my-hero>
					<my-section heading="Why Choose Us" className="u-margin-bottom-16">
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
					</my-section>
				</my-layout-container>

				<my-band>
					<my-layout-container>
						<my-section heading="Stay Updated">
							<my-text-passage className="u-margin-bottom-32">
								Subscribe to our newsletter to receive the latest news and
								updates.
							</my-text-passage>
							<my-newsletter-form></my-newsletter-form>
						</my-section>
					</my-layout-container>
				</my-band>
			</main>

			<my-footer></my-footer>
		</>
	);
}
