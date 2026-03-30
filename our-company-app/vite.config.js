import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { defineConfig } from "vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);

const designTokensRoot = path.dirname(
  require.resolve("@brad-frost-web/atomic-design-course-demo-design-tokens/package.json")
);
const componentsRoot = path.join(
  path.dirname(
    require.resolve("@brad-frost-web/atomic-design-course-demo-web-components/package.json")
  ),
  "components"
);

export default defineConfig({
  root: dirname,
  server: {
    port: 3001,
    open: true,
    fs: { allow: [".."] },
  },
  resolve: {
    alias: {
      components: componentsRoot,
    },
  },
  plugins: [
    // Resolve /components/* and components/* URLs to the web-components package
    // (alias alone only affects JS imports; browser requests need resolveId)
    {
      name: "components-resolve",
      resolveId(id) {
        const normalized = id.startsWith("/") ? id.slice(1) : id;
        if (!normalized.startsWith("components/")) return null;
        const resolved = path.join(
          path.dirname(
            require.resolve("@brad-frost-web/atomic-design-course-demo-web-components/package.json")
          ),
          normalized
        );
        return resolved;
      },
    },
    // Serve design-tokens at /design-tokens so HTML link hrefs work on all pages
    {
      name: "design-tokens",
      configureServer(server) {
        server.middlewares.use("/design-tokens", (req, res, next) => {
          const subpath = (req.url ?? "").replace(/^\//, "");
          const file = path.join(designTokensRoot, subpath);
          if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
          res.setHeader("Content-Type", req.url?.endsWith(".css") ? "text/css" : "text/plain");
          fs.createReadStream(file).pipe(res);
        });
      },
    },
  ],
});
