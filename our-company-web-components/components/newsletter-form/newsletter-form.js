import { LitElement, html, unsafeCSS } from "lit";
import styles from "./newsletter-form.css?inline";
import "../text-field/text-field.js";
import "../button/button.js";

class MyNewsletterForm extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

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
