import { LitElement, html } from "lit";
import styles from "./button.css" with { type: "css" };

class MyButton extends LitElement {
	static properties = {
		type: { type: String },
		href: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.type = "button";
		this.href = "";
	}

	render() {
		if (this.href) {
			return html`
				<a class="button" href="${this.href}">
					<slot></slot>
				</a>
			`;
		}

		return html`
			<button class="button" type="${this.type}">
				<slot></slot>
			</button>
		`;
	}
}

customElements.define("my-button", MyButton);
