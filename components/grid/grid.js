import { LitElement, html } from "lit";
import styles from "./grid.css" with { type: "css" };

class MyGrid extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<div class="grid">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-grid", MyGrid);
