import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// Resolve actual file paths — handles npm workspace hoisting where
// packages live in the root node_modules, not the app's own.
const fontsCSS = require.resolve(
	"@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/fonts.css"
);
const tokensCSS = require.resolve(
	"@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/tokens.css"
);
const componentsBundle = require.resolve(
	"@brad-frost-web/atomic-design-course-demo-web-components"
);

export default function (eleventyConfig) {
	// Passthrough copy design tokens CSS
	eleventyConfig.addPassthroughCopy({
		[fontsCSS]: "assets/tokens/fonts.css",
		[tokensCSS]: "assets/tokens/tokens.css",
	});

	// Passthrough copy app styles
	eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

	// Passthrough copy the pre-built web components bundle
	eleventyConfig.addPassthroughCopy({
		[componentsBundle]: "assets/components/our-company-web-components.js",
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
