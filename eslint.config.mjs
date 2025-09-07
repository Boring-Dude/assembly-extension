import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        // Node.js globals
        __dirname: "readonly",
        __filename: "readonly",
        exports: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@typescript-eslint/naming-convention": ["warn", {
        selector: "import",
        format: ["camelCase", "PascalCase"],
      }],
      curly: "warn",
      eqeqeq: ["warn", "always"],
      "no-throw-literal": "warn",
      semi: ["warn", "always"],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "off",
    },
  },
];
