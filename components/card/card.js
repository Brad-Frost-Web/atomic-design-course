import { LitElement, html } from "lit";
import styles from "./card.css" with { type: "css" };
import "../heading/heading.js";
import "../text-passage/text-passage.js";

class MyCard extends LitElement {
	static properties = {
		heading: { type: String },
		description: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.heading = "";
		this.description = "";
	}

	render() {
		return html`
			<article class="card">
				<my-heading variant="title-sm">${this.heading}</my-heading>
				<my-text-passage>${this.description}</my-text-passage>
			</article>
		`;
	}
}

customElements.define("my-card", MyCard);
