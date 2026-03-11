import { LitElement, html } from "lit";
import styles from "./textarea-field.css" with { type: "css" };

class MyTextareaField extends LitElement {
	static properties = {
		label: { type: String },
		placeholder: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.label = "";
		this.placeholder = "";
		this._generatedId = `field-${Math.random().toString(36).substring(2, 9)}`;
	}

	get _fieldId() {
		return this.id || this._generatedId;
	}

	render() {
		return html`
			<div class="textarea-field">
				${this.label
					? html`<label class="textarea-field__label" for="${this._fieldId}">${this.label}</label>`
					: ""}
				<textarea
					class="textarea-field__textarea"
					id="${this._fieldId}"
					placeholder="${this.placeholder}"
				></textarea>
			</div>
		`;
	}
}

customElements.define("my-textarea-field", MyTextareaField);
