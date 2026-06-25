import { LitElement, html } from "lit";
import styles from "./header.css" with { type: "css" };

class MyHeader extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<header class="header">
				<a href="./index.html" class="logo-link" aria-label="Our Company — home">
					<div class="logo"></div>
				</a>
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
