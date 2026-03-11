import { LitElement, html } from "lit";
import styles from "./text-field.css" with { type: "css" };

class MyTextField extends LitElement {
	static properties = {
		label: { type: String },
		placeholder: { type: String },
		type: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.label = "";
		this.placeholder = "";
		this.type = "text";
		this._generatedId = `field-${Math.random().toString(36).substring(2, 9)}`;
	}

	get _fieldId() {
		return this.id || this._generatedId;
	}

	render() {
		return html`
			<div class="text-field">
				${this.label
					? html`<label class="text-field__label" for="${this._fieldId}">${this.label}</label>`
					: ""}
				<input
					class="text-field__input"
					id="${this._fieldId}"
					type="${this.type}"
					placeholder="${this.placeholder}"
				/>
			</div>
		`;
	}
}

customElements.define("my-text-field", MyTextField);
