import { LitElement, html } from "lit";
import styles from "./band.css" with { type: "css" };

class MyBand extends LitElement {
	static properties = {
		background: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.background = "";
	}

	render() {
		return html`
			<div
				class="band"
				style="${this.background ? `background-color: ${this.background}` : ""}"
			>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-band", MyBand);
