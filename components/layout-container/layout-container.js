import { LitElement, html } from "lit";
import styles from "./layout-container.css" with { type: "css" };

class MyLayoutContainer extends LitElement {
	static properties = {
		variant: { type: String, reflect: true },
	};

	static styles = [styles];

	constructor() {
		super();
		this.variant = "";
	}

	render() {
		return html`
			<div
				class="layout-container ${this.variant === "narrow"
					? "layout-container--narrow"
					: ""}"
			>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-layout-container", MyLayoutContainer);
