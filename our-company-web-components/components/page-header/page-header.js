import { LitElement, html, unsafeCSS } from "lit";
import styles from "./page-header.css?inline";
import "../heading/heading.js";
import "../text-passage/text-passage.js";

class MyPageHeader extends LitElement {
	static properties = {
		heading: { type: String },
		description: { type: String },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.heading = "";
		this.description = false;
	}

	render() {
		return html`
			<div class="page-header">
				<my-heading tagName="h1" variant="title-lg">${this.heading}</my-heading>
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
