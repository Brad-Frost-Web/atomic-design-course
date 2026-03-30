import { defineConfig } from "vite";

export default defineConfig({
	root: ".",
	server: {
		port: 3000,
		open: true,
	},
	build: {
		lib: {
			entry: "components/index.js",
			formats: ["es"],
			fileName: "index",
		},
		outDir: "dist",
	},
});
