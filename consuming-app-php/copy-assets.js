#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

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

// Copy design token CSS files
const tokenFiles = [
	{
		src: "node_modules/@brad-frost/our-company-design-tokens/our-company/build/css/tokens.css",
		dest: path.join(tokensDir, "tokens.css"),
	},
	{
		src: "node_modules/@brad-frost/our-company-design-tokens/our-company/css/fonts.css",
		dest: path.join(tokensDir, "fonts.css"),
	},
];

tokenFiles.forEach(({ src, dest }) => {
	const fullSrc = path.join(dirname, src);
	if (fs.existsSync(fullSrc)) {
		fs.copyFileSync(fullSrc, dest);
		console.log(`✓ Copied ${path.basename(src)}`);
	} else {
		console.warn(`⚠ Not found: ${src}`);
	}
});

// Copy pre-built web components bundle
const bundleSrc = path.join(
	dirname,
	"node_modules/@brad-frost/our-company-web-components/dist/our-company-web-components.js",
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
