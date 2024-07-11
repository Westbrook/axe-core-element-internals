/* eslint-disable lit-a11y/img-redundant-alt */
import { html, TemplateResult } from 'lit';

export default {
  title: 'role/img',
};

class Image extends HTMLElement {
	internals_!: ElementInternals;

	constructor() {
		super();
		this.internals_ = this.attachInternals();
		this.internals_.role = 'img';
	}
}

customElements.define('axe-img', Image);

export const dom = (): TemplateResult => html`
	<img src="https://picsum.photos/id/870/200/300" alt="An image from picsum.photos" />
`;

export const domNegative = (): TemplateResult => html`
	<img src="https://picsum.photos/id/870/200/300" alt="An image from picsum.photos: DOM" />
`;

export const customElement = (): TemplateResult => html`
	<axe-img
		style="background: url(https://picsum.photos/id/870/200/300); width: 200px; height: 300px; display: inline-block;"
		aria-label="An image from picsum.photos"
	></axe-img>
`;
