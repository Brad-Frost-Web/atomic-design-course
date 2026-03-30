#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Directories
const vendorDir = path.join(dirname, "public", "vendor");
const tokensDir = path.join(vendorDir, "design-tokens");
const componentsDir = path.join(vendorDir, "components");

// Ensure directories exist
[vendorDir, tokensDir, componentsDir].forEach((dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
});

// Resolve actual file paths — handles npm workspace hoisting
const tokenFiles = [
	{
		src: require.resolve(
			"@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/tokens.css"
		),
		dest: path.join(tokensDir, "tokens.css"),
	},
	{
		src: require.resolve(
			"@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/fonts.css"
		),
		dest: path.join(tokensDir, "fonts.css"),
	},
];

tokenFiles.forEach(({ src, dest }) => {
	if (fs.existsSync(src)) {
		fs.copyFileSync(src, dest);
		console.log(`✓ Copied ${path.basename(src)}`);
	} else {
		console.warn(`⚠ Not found: ${src}`);
	}
});

// Copy pre-built web components bundle
const bundleSrc = require.resolve(
	"@brad-frost-web/atomic-design-course-demo-web-components"
);

if (fs.existsSync(bundleSrc)) {
	fs.copyFileSync(
		bundleSrc,
		path.join(componentsDir, "our-company-web-components.js"),
	);
	console.log("✓ Copied our-company-web-components.js bundle");
} else {
	console.warn("⚠ Component bundle not found. Run `npm run build` in our-company-web-components first.");
}

console.log("\n✓ Asset copy complete. Run: php -S localhost:8000 -t public");
