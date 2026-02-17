/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: [
		"../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"./pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-themes",
	],
	framework: "@storybook/web-components-vite",
};
export default config;
