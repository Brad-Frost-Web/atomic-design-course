import { LitElement, html, unsafeCSS } from "lit";
import styles from "./grid.css?inline";

class MyGrid extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	static properties = {
		variant: { type: String, reflect: true },
	};

	constructor() {
		super();
		this.variant = "";
	}
	render() {
		return html`
			<div class="grid ${this.variant ? `grid--${this.variant}` : ""}">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-grid", MyGrid);
