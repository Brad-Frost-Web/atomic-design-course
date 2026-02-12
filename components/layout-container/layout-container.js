import { LitElement, html } from "lit";
import styles from "./layout-container.css" with { type: "css" };

class MyLayoutContainer extends LitElement {
	static properties = {
		narrow: { type: Boolean, reflect: true },
	};

	static styles = [styles];

	constructor() {
		super();
		this.narrow = false;
	}

	render() {
		return html`
			<div
				class="layout-container ${this.narrow ? "layout-container--narrow" : ""}"
			>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-layout-container", MyLayoutContainer);
