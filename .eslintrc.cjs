process.env.ESLINT_TSCONFIG = "tsconfig.json"

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		es2022: true,
		node: true,
		browser: true,
	},
	extends: ["eslint-config-prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
	},
	rules: {
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
			rules: {
				"astro/no-conflict-set-directives": "warn",
				"astro/no-unused-define-vars-in-style": "warn",
				"astro/no-unused-css-selector": "off",
				"astro/prefer-class-list-directive": "warn",
				"astro/semi": ["warn", "never"],
				"astro/jsx-a11y/anchor-is-valid": "warn",
				"@stylistic/ts/indent": "off",
			},
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ["**/*.astro/*.js", "*.astro/*.js"],
			parser: "@typescript-eslint/parser",
		},
	],
}