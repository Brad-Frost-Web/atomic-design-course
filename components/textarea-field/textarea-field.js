import { LitElement, html, unsafeCSS } from "lit";
import styles from "./textarea-field.css?inline";

class MyTextareaField extends LitElement {
	static properties = {
		label: { type: String },
		placeholder: { type: String },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

	constructor() {
		super();
		this.label = "";
		this.placeholder = "";
	}

	render() {
		return html`
			<div class="textarea-field">
				${this.label
					? html`<label class="textarea-field__label">${this.label}</label>`
					: ""}
				<textarea
					class="textarea-field__textarea"
					placeholder="${this.placeholder}"
				></textarea>
			</div>
		`;
	}
}

customElements.define("my-textarea-field", MyTextareaField);
