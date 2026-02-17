import { LitElement, html, unsafeCSS } from "lit";
import styles from "./hero.css?inline";
import "../heading/heading.js";
import "../text-passage/text-passage.js";
import "../button/button.js";

class MyHero extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<section class="hero">
				<my-heading variant="title-lg" tagName="h1" class="hero__heading">
					Welcome to Our Company
				</my-heading>
				<my-text-passage class="hero__description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</my-text-passage>
				<my-button>Get Started</my-button>
			</section>
		`;
	}
}

customElements.define("my-hero", MyHero);
