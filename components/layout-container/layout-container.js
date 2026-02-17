import { LitElement, html, unsafeCSS } from "lit";
import styles from "./layout-container.css?inline";

class MyLayoutContainer extends LitElement {
	static properties = {
		variant: { type: String, reflect: true },
	};

	static get styles() {
		return unsafeCSS(styles);
	}

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
