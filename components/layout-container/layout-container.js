import { LitElement, html } from "lit";
import styles from "./layout-container.css" with { type: "css" };

class MyLayoutContainer extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<div class="layout-container">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-layout-container", MyLayoutContainer);
