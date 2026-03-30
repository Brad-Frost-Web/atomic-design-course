export default function (eleventyConfig) {
	// Passthrough copy design tokens CSS from the design system package
	eleventyConfig.addPassthroughCopy({
		"node_modules/@brad-frost/our-company-design-tokens/our-company/build/css/tokens.css":
			"assets/tokens/tokens.css",
		"node_modules/@brad-frost/our-company-design-tokens/our-company/css/fonts.css":
			"assets/tokens/fonts.css",
	});

	// Passthrough copy the pre-built web components bundle
	eleventyConfig.addPassthroughCopy({
		"node_modules/@brad-frost/our-company-web-components/dist/our-company-web-components.js":
			"assets/components/our-company-web-components.js",
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
		},
		templateFormats: ["njk", "html", "md"],
		htmlTemplateEngine: "njk",
	};
}
