import { LitElement, html } from "lit";
import styles from "./text-passage.css" with { type: "css" };

class MyTextPassage extends LitElement {
	static styles = [styles];

	render() {
		return html`<p class="text-passage"><slot></slot></p>`;
	}
}

customElements.define("my-text-passage", MyTextPassage);
