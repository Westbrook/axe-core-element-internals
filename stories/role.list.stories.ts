/* eslint-disable max-classes-per-file */
import { html, TemplateResult } from 'lit';

export default {
  title: 'role/img',
};

class List extends HTMLElement {
	internals_!: ElementInternals;

	constructor() {
		super();
		this.internals_ = this.attachInternals();
		this.internals_.role = 'list';
	}
}

customElements.define('axe-list', List);

class ListItem extends HTMLElement {
	internals_!: ElementInternals;

	constructor() {
		super();
		this.internals_ = this.attachInternals();
		this.internals_.role = 'listitem';
	}
}

customElements.define('axe-list-item', ListItem);

export const dom = (): TemplateResult => html`
	<div>
		<ul>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
		</ul>
		<ol>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
		</ol>
		<div role="list">
			<div role="listitem">One</div>
			<div role="listitem">Two</div>
			<div role="listitem">Three</div>
		</div>
	</div>
`;

export const domNegative = (): TemplateResult => html`
	<div>
		<ul>
			<li>One: DOM</li>
			<li>Two</li>
			<li>Three</li>
		</ul>
		<ol>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
		</ol>
		<div role="list">
			<div role="listitem">One</div>
			<div role="listitem">Two</div>
			<div role="listitem">Three</div>
		</div>
	</div>
`;

export const customElement = (): TemplateResult => html`
	<style>
		/**
		* When applied via ElementInternals, Firefox adds the "list item marker" to the tree.
		* This applies them in a way that is equivelent to the native elements.
		* An in project implemenation would likely want to apply this via shadow DOM, adoptedStyleSheets, and a <slot> element.
		*/ 
		axe-list {
			list-style-type: none;
		}
		axe-list[unordered] {
			list-style-type: disc;
		}
		axe-list[ordered] {
			list-style-type: decimal;
		}
		axe-list-item {
			display: list-item;
		}
	</style>
	<div>
		<axe-list unordered>
			<axe-list-item>One</axe-list-item>
			<axe-list-item>Two</axe-list-item>
			<axe-list-item>Three</axe-list-item>
		</axe-list>
		<axe-list ordered>
			<axe-list-item>One</axe-list-item>
			<axe-list-item>Two</axe-list-item>
			<axe-list-item>Three</axe-list-item>
		</axe-list>
		<axe-list>
			<axe-list-item>One</axe-list-item>
			<axe-list-item>Two</axe-list-item>
			<axe-list-item>Three</axe-list-item>
		</axe-list>
	</div>
`;
