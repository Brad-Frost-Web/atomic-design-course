import { LitElement, html } from "lit";
import styles from "./heading.css" with { type: "css" };

class MyHeading extends LitElement {
	static properties = {
		variant: { type: String, reflect: true },
	};

	static styles = [styles];

	constructor() {
		super();
		this.variant = "title";
	}

	render() {
		return html`<p class="heading"><slot></slot></p>`;
	}
}

customElements.define("my-heading", MyHeading);
