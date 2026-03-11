import { LitElement, html } from "lit";
import styles from "./footer.css" with { type: "css" };

class MyFooter extends LitElement {
	static styles = [styles];

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
<<<<<<< Updated upstream
					&copy; 2026 My Company. All rights reserved.
=======
					&copy; 2026 Our Company. All rights reserved.
>>>>>>> Stashed changes
				</p>
			</footer>
		`;
	}
}

customElements.define("my-footer", MyFooter);
