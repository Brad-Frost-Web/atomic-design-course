import { LitElement, html, unsafeCSS } from "lit";
import styles from "./grid.css?inline";

class MyGrid extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<div class="grid">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-grid", MyGrid);
