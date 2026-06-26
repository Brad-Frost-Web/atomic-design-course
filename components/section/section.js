import { LitElement, html, unsafeCSS } from "lit";
import styles from "./section.css?inline";
import "../heading/heading.js";

class MySection extends LitElement {
	static properties = {
		heading: { type: String },
		variant: { type: String, reflect: true },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.heading = "";
		this.variant = "";
	}

	render() {
		return html`
			<section class="section ${this.variant ? `section--${this.variant}` : ""}">
				${this.heading
					? html`<my-heading tag-name="h2" variant="title" class="section__heading">${this.heading}</my-heading>`
					: ""}
				<slot></slot>
			</section>
		`;
	}
}

customElements.define("my-section", MySection);
