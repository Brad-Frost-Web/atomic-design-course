<!DOCTYPE html>
<html lang="en">
	<head>
		<?php $pageTitle = 'Our Company Loves PHP'; include 'includes/head.php'; ?>
	</head>
	<body>
		<?php include 'includes/header.php'; ?>

		<main class="main u-margin-bottom-64">
			<my-layout-container>
				<my-page-header
					class="u-margin-bottom-32"
					heading="Our Company loves PHP. Here's why:"
				></my-page-header>
				<my-grid variant="3up">
					<my-card
						heading="Zero Build Step"
						description="No webpack. No Vite. No bundler. Just upload files to a server and they work. Like the good old days, except now."
					></my-card>
					<my-card
						heading="Battle-Tested at Scale"
						description="WordPress, Wikipedia, Facebook (originally). PHP has quietly powered more of the internet than most languages dare to dream about."
					></my-card>
					<my-card
						heading="Runs Everywhere"
						description="Any $5/month shared hosting plan on earth can run PHP. Try deploying your Next.js app to GoDaddy and see what happens."
					></my-card>
					<my-card
						heading="It Just Works"
						description="Write a .php file. Put it on a server. Visit the URL. There is no step four."
					></my-card>
					<my-card
						heading="Incredible Documentation"
						description="php.net has had excellent docs since before your favorite framework existed. The comment section alone is a historical artifact."
					></my-card>
					<my-card
						heading="Evolving Gracefully"
						description="PHP 8+ has enums, fibers, named arguments, and match expressions. It grew up while you weren't looking."
					></my-card>
					<my-card
						heading="The $ Sign"
						description="Every variable starts with a dollar sign. It's a constant reminder of the mass amounts of money PHP developers earn."
					></my-card>
					<my-card
						heading="No JavaScript Required"
						description="Server-side rendering before it was cool. PHP was doing SSR in 1995 and never felt the need to write a blog post about it."
					></my-card>
					<my-card
						heading="Templating Built In"
						description="PHP is literally a templating language that grew into a programming language. You can mix HTML and logic without importing a single library."
					></my-card>
					<my-card
						heading="One Process Per Request"
						description="No shared state. No race conditions. No 'have you tried turning the event loop off and on again.' Refreshingly simple."
					></my-card>
					<my-card
						heading="Massive Ecosystem"
						description="Composer, Laravel, Symfony, Drupal, Craft CMS. The PHP ecosystem is deep, mature, and doesn't deprecate itself every six months."
					></my-card>
					<my-card
						heading="Web Components Love PHP"
						description="This entire page is proof. Standard HTML custom elements work perfectly in a zero-build PHP app. No framework wrappers needed."
					></my-card>
				</my-grid>
			</my-layout-container>
		</main>

		<?php include 'includes/footer.php'; ?>
	</body>
</html>
