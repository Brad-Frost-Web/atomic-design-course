import "../../../components/header/header.js";
import "../../../components/layout-container/layout-container.js";
import "../../../components/page-header/page-header.js";
import "../../../components/text-passage/text-passage.js";
import "../../../components/button/button.js";
import "../../../components/footer/footer.js";
import "@brad-frost/our-company-app/styles.css";

const meta = {
	title: "Pages/About",
	tags: ["!autodocs"],
};

export default meta;

export const Default = {
	render: () => {
		return `
			<my-header class="u-margin-bottom-24"></my-header>

			<main class="main u-margin-bottom-64">
				<my-layout-container variant="narrow">
					<my-page-header heading="About Us"></my-page-header>
					<my-text-passage class="u-margin-bottom-32">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris.
						</p>
					</my-text-passage>
					<div class="image-placeholder u-margin-bottom-32">
						Image Placeholder
					</div>
					<my-text-passage class="u-margin-bottom-32">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</my-text-passage>
					<my-button>Learn more about our services</my-button>
				</my-layout-container>
			</main>

			<my-footer></my-footer>
		`;
	},
};
