/** @type {import('prettier').Config} */
export default {
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'auto',
  printWidth: 80,
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  quoteProps: 'consistent',
  trailingComma: 'none',
  useTabs: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}