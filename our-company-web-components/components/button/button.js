import { LitElement, html, unsafeCSS } from "lit";
import styles from "./button.css?inline";

class MyButton extends LitElement {
	static properties = {
		type: { type: String },
		disabled: { type: Boolean, reflect: true },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.type = "button";
		this.disabled = false;
	}

	render() {
		return html`
			<button class="button" type="${this.type}" ?disabled="${this.disabled}">
				<slot></slot>
			</button>
		`;
	}
}

customElements.define("my-button", MyButton);
