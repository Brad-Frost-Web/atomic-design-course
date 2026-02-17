/** @type { import('@storybook/web-components-vite').Preview } */
import "../.storybook/theme.css";
import { withThemeByClassName } from "@storybook/addon-themes";

/**
 * Updates the theme of the storybook using @storybook/addon-themes
 * 1) Add your new theme here in order to have it show up in the dropdown
 */
export const decorators = [
	withThemeByClassName({
		themes: {
			"our-company": "our-company",
			vanilla: "vanilla",
			"wowee-zowee": "wowee-zowee",
		},
		defaultTheme: "our-company",
	}),
];

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
};

export default preview;
