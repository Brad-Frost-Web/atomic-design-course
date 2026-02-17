import { LitElement, html, unsafeCSS } from "lit";
import styles from "./footer.css?inline";

class MyFooter extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<footer class="footer">
				<nav class="footer-nav">
					<ul class="footer-nav__list">
						<li class="footer-nav__item">
							<a href="./services.html" class="footer-nav__link">Services</a>
						</li>
						<li class="footer-nav__item">
							<a href="./about.html" class="footer-nav__link">About</a>
						</li>
						<li class="footer-nav__item">
							<a href="./contact.html" class="footer-nav__link">Contact</a>
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
