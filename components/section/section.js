import { LitElement, html } from "lit";
import styles from "./section.css" with { type: "css" };
import "../heading/heading.js";

class MySection extends LitElement {
	static properties = {
		heading: { type: String },
	};

	static styles = [styles];

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
