import { LitElement, html } from "lit";
import styles from "./features.css" with { type: "css" };
import "../heading/heading.js";
import "../card/card.js";
import "../grid/grid.js";

class MyFeatures extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<section class="features">
				<my-heading variant="title">Why Choose Us</my-heading>
				<my-grid>
					<my-card
						heading="Feature One"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
					></my-card>
					<my-card
						heading="Feature Two"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
					></my-card>
					<my-card
						heading="Feature Three"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
					></my-card>
				</my-grid>
			</section>
		`;
	}
}

customElements.define("my-features", MyFeatures);
