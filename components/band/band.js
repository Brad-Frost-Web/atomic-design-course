import { LitElement, html } from "lit";
import styles from "./band.css" with { type: "css" };

class MyBand extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<div class="band">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-band", MyBand);
