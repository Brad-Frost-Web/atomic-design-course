import { LitElement, html } from "lit";
import styles from "./heading.css" with { type: "css" };

const VALID_TAG_NAMES = ["h1", "h2", "h3", "h4", "h5", "h6"];

class MyHeading extends LitElement {
	static properties = {
		tagName: { type: String, reflect: true, attribute: "tag-name" },
		variant: { type: String, reflect: true },
	};

	static styles = [styles];

	constructor() {
		super();
		this.tagName = "h2";
		this.variant = "title";
	}

	get _tag() {
		const t = (this.tagName || "").toLowerCase();
		return VALID_TAG_NAMES.includes(t) ? t : "h2";
	}

	render() {
		return html`<${this._tag} class="heading ${this.variant ? `heading--${this.variant}` : ""}"><slot></slot></${this._tag}>`;
	}
}

customElements.define("my-heading", MyHeading);
