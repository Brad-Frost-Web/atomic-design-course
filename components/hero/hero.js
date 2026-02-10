import { LitElement, html } from "lit";
import styles from "./hero.css" with { type: "css" };

class MyHero extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<section class="hero">
				<h1 class="hero__title">Welcome to Our Company</h1>
				<p class="hero__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<a href="#" class="hero__cta">Get Started</a>
			</section>
		`;
	}
}

customElements.define("my-hero", MyHero);
