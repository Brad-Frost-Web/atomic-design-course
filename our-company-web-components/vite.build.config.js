import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(dirname, "index.js"),
			name: "OurCompanyWebComponents",
			fileName: "our-company-web-components",
			formats: ["es"],
		},
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			external: [],
		},
	},
});
