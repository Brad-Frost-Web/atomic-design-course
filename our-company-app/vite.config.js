import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/**
 * Walk up from the app directory looking for a package in node_modules.
 * Works with hoisted workspace deps and standard installs.
 */
function findPackageDir(name) {
  const parts = name.split("/");
  let dir = dirname;
  while (dir !== path.dirname(dir)) {
    const candidate = path.join(dir, "node_modules", ...parts);
    if (fs.existsSync(candidate)) return candidate;
    dir = path.dirname(dir);
  }
  throw new Error(`Cannot find package: ${name}`);
}

const designTokensRoot = findPackageDir(
  "@brad-frost-web/atomic-design-course-demo-design-tokens"
);

export default defineConfig({
  root: dirname,
  server: {
    port: 3001,
    open: true,
    fs: { allow: [".."] },
  },
  plugins: [
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
