import { LitElement, html, unsafeCSS } from "lit";
import styles from "./text-field.css?inline";

class MyTextField extends LitElement {
	static properties = {
		label: { type: String },
		placeholder: { type: String },
		type: { type: String },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.label = "";
		this.placeholder = "";
		this.type = "text";
	}

	render() {
		return html`
			<div class="text-field">
				${this.label
					? html`<label class="text-field__label">${this.label}</label>`
					: ""}
				<input
					class="text-field__input"
					type="${this.type}"
					placeholder="${this.placeholder}"
				/>
			</div>
		`;
	}
}

customElements.define("my-text-field", MyTextField);
