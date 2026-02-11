import { LitElement, html } from "lit";
import styles from "./page-header.css" with { type: "css" };
import "../heading/heading.js";

class MyPageHeader extends LitElement {
	static properties = {
		text: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.text = "";
	}

	render() {
		return html`
			<div class="page-header">
				<my-heading variant="title">${this.text}</my-heading>
			</div>
		`;
	}
}

customElements.define("my-page-header", MyPageHeader);
