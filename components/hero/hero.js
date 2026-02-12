import { LitElement, html } from "lit";
import styles from "./hero.css" with { type: "css" };

class MyHero extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<section class="hero">
				<h1 class="heading heading--title-lg hero__heading">
					Welcome to Our Company
				</h1>
				<div class="text-passage text-passage--lg hero__description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<a href="#" class="button">Get Started</a>
			</section>
		`;
	}
}

customElements.define("my-hero", MyHero);
