import { LitElement, html } from "lit";
import styles from "./form.css" with { type: "css" };

class MyForm extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<form class="form">
				<slot></slot>
			</form>
		`;
	}
}

customElements.define("my-form", MyForm);
