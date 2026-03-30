import { LitElement, html, unsafeCSS } from "lit";
import styles from "./section.css?inline";
import "../heading/heading.js";

class MySection extends LitElement {
	static properties = {
		heading: { type: String },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.heading = "";
	}

	render() {
		return html`
			<section class="section">
				${this.heading
					? html`<my-heading tag-name="h2" variant="title" class="section__heading">${this.heading}</my-heading>`
					: ""}
				<slot></slot>
			</section>
		`;
	}
}

customElements.define("my-section", MySection);
