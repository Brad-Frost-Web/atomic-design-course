import { LitElement, html } from "lit";
import styles from "./newsletter-form.css" with { type: "css" };
import "../text-field/text-field.js";
import "../button/button.js";

class MyNewsletterForm extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<form class="newsletter-form">
				<my-text-field
					type="email"
					placeholder="Enter your email"
					class="newsletter-form__text-field"
				></my-text-field>
				<my-button type="submit">Subscribe</my-button>
			</form>
		`;
	}
}

customElements.define("my-newsletter-form", MyNewsletterForm);
