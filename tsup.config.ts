import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  noExternal: ['longdomap-type']
});