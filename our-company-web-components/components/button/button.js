import { LitElement, html, unsafeCSS } from "lit";
import styles from "./button.css?inline";

class MyButton extends LitElement {
	static properties = {
		type: { type: String },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.type = "button";
	}

	render() {
		return html`
			<button class="button" type="${this.type}">
				<slot></slot>
			</button>
		`;
	}
}

customElements.define("my-button", MyButton);
