import { LitElement, html, unsafeCSS } from "lit";
import styles from "./form.css?inline";

class MyForm extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<form class="form">
				<slot></slot>
			</form>
		`;
	}
}

customElements.define("my-form", MyForm);
