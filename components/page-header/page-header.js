import { LitElement, html } from "lit";
import styles from "./page-header.css" with { type: "css" };
import "../heading/heading.js";
import "../text-passage/text-passage.js";

class MyPageHeader extends LitElement {
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
			<div class="page-header">
				<my-heading tag-name="h1" variant="title-lg">${this.heading}</my-heading>
				${this.description
					? html`<my-text-passage class="page-header__description"
							>${this.description}</my-text-passage
						>`
					: ""}
			</div>
		`;
	}
}

customElements.define("my-page-header", MyPageHeader);
