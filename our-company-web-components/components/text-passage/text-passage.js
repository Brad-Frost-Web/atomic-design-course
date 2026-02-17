import { LitElement, html, unsafeCSS } from "lit";
import styles from "./text-passage.css?inline";

class MyTextPassage extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`<div class="text-passage"><slot></slot></div>`;
	}
}

customElements.define("my-text-passage", MyTextPassage);
