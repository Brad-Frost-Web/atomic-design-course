import { LitElement, html } from "lit";
import styles from "./text-passage.css" with { type: "css" };

class MyTextPassage extends LitElement {
	static properties = {
		variant: { type: String, reflect: true },
	};

	static styles = [styles];

	render() {
		return html`<div class="text-passage ${this.variant ? `text-passage--${this.variant}` : ""}"><slot></slot></div>`;
	}
}

customElements.define("my-text-passage", MyTextPassage);
