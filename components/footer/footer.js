import { LitElement, html } from "lit";
import styles from "./footer.css" with { type: "css" };

class MyFooter extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<footer class="footer">
				<nav>
					<ul class="footer__nav-list">
						<li>
							<a href="#" class="footer__link">Services</a>
						</li>
						<li>
							<a href="#" class="footer__link">About</a>
						</li>
						<li>
							<a href="#" class="footer__link">Contact</a>
						</li>
					</ul>
				</nav>
				<p class="footer__copyright">
					&copy; 2026 My Company. All rights reserved.
				</p>
			</footer>
		`;
	}
}

customElements.define("my-footer", MyFooter);
