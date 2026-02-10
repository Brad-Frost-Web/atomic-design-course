import { LitElement, html } from "lit";
import styles from "./header.css" with { type: "css" };

class MyHeader extends LitElement {
	static styles = [styles];

	render() {
		return html`
			<header class="header">
				<div class="header__logo"></div>
				<nav>
					<ul class="header__nav-list">
						<li>
							<a href="#" class="header__link">Services</a>
						</li>
						<li>
							<a href="#" class="header__link">About</a>
						</li>
						<li>
							<a href="#" class="header__link">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define("my-header", MyHeader);
