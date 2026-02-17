import { LitElement, html, unsafeCSS } from "lit";
import styles from "./band.css?inline";

class MyBand extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<div class="band">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("my-band", MyBand);
