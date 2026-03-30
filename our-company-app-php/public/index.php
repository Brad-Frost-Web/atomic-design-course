<!DOCTYPE html>
<html lang="en">
	<head>
		<?php $pageTitle = 'Home — Our Company'; include 'includes/head.php'; ?>
	</head>
	<body>
		<?php include 'includes/header.php'; ?>

		<main class="main">
			<my-layout-container>
				<my-hero class="u-margin-bottom-64"></my-hero>
				<my-section heading="Why Choose Us" class="u-margin-bottom-16">
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
					<my-section heading="How It Works">
						<my-text-passage class="u-margin-bottom-32">
							<ol>
								<li>Install npm packages: <code>npm install</code></li>
								<li>Assets copy automatically via postinstall to <code>public/vendor/</code></li>
								<li>PHP includes the CSS and JS — no build step needed</li>
								<li>Use web components as plain HTML: <code>&lt;my-card&gt;&lt;/my-card&gt;</code></li>
								<li>Serve: <code>php -S localhost:8000 -t public</code></li>
							</ol>
						</my-text-passage>
					</my-section>
				</my-layout-container>
			</my-band>
		</main>

		<?php include 'includes/footer.php'; ?>
	</body>
</html>
