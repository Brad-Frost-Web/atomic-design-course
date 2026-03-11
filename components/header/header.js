import { LitElement, html } from "lit";
import styles from "./header.css" with { type: "css" };

class MyHeader extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<header class="header">
				<h3 class="logo"><a href="/" class="logo__link">Our Company</a></h3>
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
