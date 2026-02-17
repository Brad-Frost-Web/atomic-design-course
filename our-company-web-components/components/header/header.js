import { LitElement, html, unsafeCSS } from "lit";
import styles from "./header.css?inline";

class MyHeader extends LitElement {
	static get styles() {
		return unsafeCSS(styles);
	}

	render() {
		return html`
			<header class="header">
				<div class="logo"></div>
				<nav class="primary-nav">
					<ul class="primary-nav__list">
						<li class="primary-nav__item">
							<a href="./services.html" class="primary-nav__link">Services</a>
						</li>
						<li class="primary-nav__item">
							<a href="./about.html" class="primary-nav__link">About</a>
						</li>
						<li class="primary-nav__item">
							<a href="./contact.html" class="primary-nav__link">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define("my-header", MyHeader);
