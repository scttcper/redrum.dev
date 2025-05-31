/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss' /* Must come last */,
  ],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.mdx', '*.md'],
      options: {
        printWidth: 80,
      },
    },
  ],
};
