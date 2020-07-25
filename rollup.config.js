import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const env = process.env.NODE_ENV || 'production';

export default [
  {
    input: "index.js",
    plugins: [
      resolve(),
      commonjs(),
      replace({
        "process.env.NODE_ENV": JSON.stringify(env),
      }),
    ],
    output: [
      {
        file: `esm/prop-types.${env}.js`,
        format: "esm",
      },
      {
        file: `esm/prop-types.${env}.min.js`,
        format: "esm",
        plugins: [terser()],
      },
    ],
  },
];
