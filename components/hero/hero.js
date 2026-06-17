import { LitElement, html } from "lit";
import styles from "./hero.css" with { type: "css" };
import "../heading/heading.js";
import "../text-passage/text-passage.js";
import "../button/button.js";

class MyHero extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<section class="hero">
				<my-heading variant="title-lg" tag-name="h1" class="hero__heading">
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
