import { LitElement, html } from "lit";
import styles from "./section.css" with { type: "css" };
import "../heading/heading.js";

class MySection extends LitElement {
	static properties = {
		heading: { type: String },
		variant: { type: String, reflect: true },
	};

	static styles = [styles];

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
