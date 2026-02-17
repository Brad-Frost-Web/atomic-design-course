import { LitElement, html } from "lit";
import styles from "./grid.css" with { type: "css" };

class MyGrid extends LitElement {
	static styles = [styles];

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
