import { LitElement, html } from "lit";
import styles from "./newsletter.css" with { type: "css" };
import "../heading/heading.js";
import "../text-passage/text-passage.js";
import "../text-field/text-field.js";
import "../button/button.js";

class MyNewsletter extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<section class="newsletter">
				<my-heading variant="title">Stay Updated</my-heading>
				<my-text-passage>
					Subscribe to our newsletter to receive the latest news and
					updates.
				</my-text-passage>
				<form class="newsletter__form">
					<my-text-field
						type="email"
						placeholder="Enter your email"
					></my-text-field>
					<my-button type="submit">Subscribe</my-button>
				</form>
			</section>
		`;
	}
}

customElements.define("my-newsletter", MyNewsletter);
