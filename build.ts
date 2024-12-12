import esbuild from "esbuild";

esbuild.build({
  absWorkingDir: process.cwd(),
  entryPoints: ["./src/index.ts"],
  bundle: true,
  format: "esm",
  splitting: true,
  outdir: "dist",
});
