<!DOCTYPE html>
<html lang="en">
	<head>
		<?php $pageTitle = 'About — Our Company'; include 'includes/head.php'; ?>
	</head>
	<body>
		<?php include 'includes/header.php'; ?>

		<main class="main">
			<my-layout-container>
				<my-page-header>About This Demo</my-page-header>

				<my-text-passage class="u-margin-bottom-32">
					This is a deliberately simple vanilla PHP application. It exists to
					prove one thing: web components work everywhere.
				</my-text-passage>

				<my-text-passage class="u-margin-bottom-32">
					No build tools. No bundlers. No frameworks. Just HTML, PHP, and a
					couple of design system packages that get copied into static files
					after npm install.
				</my-text-passage>

				<my-text-passage>
					This approach scales from a simple PHP app to complex enterprise
					systems. The design system becomes a true single source of truth that
					works everywhere your team builds — PHP, WordPress, Laravel, whatever.
				</my-text-passage>
			</my-layout-container>
		</main>

		<?php include 'includes/footer.php'; ?>
	</body>
</html>
