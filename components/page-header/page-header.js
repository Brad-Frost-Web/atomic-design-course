import { LitElement, html } from "lit";
import styles from "./page-header.css" with { type: "css" };
import "../heading/heading.js";

class MyPageHeader extends LitElement {
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
			<div class="page-header">
				<my-heading tagName="h1" variant="title-lg">${this.heading}</my-heading>
			</div>
		`;
	}
}

customElements.define("my-page-header", MyPageHeader);
