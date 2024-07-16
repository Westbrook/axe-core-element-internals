/* eslint-disable max-classes-per-file */
import { html, TemplateResult } from 'lit';

export default {
  title: 'role/menu',
};

class Menu extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'menu';
    this.internals_.ariaOrientation = 'vertical';
  }
}

customElements.define('axe-menu', Menu);

class Group extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'group';
  }
}

customElements.define('axe-group', Group);

class MenuItem extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'menuitem';
  }
}

customElements.define('axe-menuitem', MenuItem);

export const dom = (): TemplateResult => html`
  <div>
    <style>
      /**
		 * Firefox includes the disc in the readable text, otherwise.
		 */
      ul {
        list-style-type: none;
      }
    </style>
    <div role="menu" aria-label="Test menu" aria-orientation="vertical">
      <ul role="group" aria-label="Test group 1">
        <li role="menuitem">Inbox</li>
        <li role="menuitem">Archive</li>
        <li role="menuitem">Trash</li>
      </ul>
      <ul role="group" aria-label="Test group 2">
        <li role="menuitem">Custom Folder 1</li>
        <li role="menuitem">Custom Folder 2</li>
        <li role="menuitem">Custom Folder 3</li>
      </ul>
      <ul role="group" aria-label="Test group 3">
        <li role="menuitem">New Folder</li>
      </ul>
    </div>
  </div>
`;

export const domNegative = (): TemplateResult => html`
  <div>
    <style>
      /**
		 * Firefox includes the disc in the readable text, otherwise.
		 */
      ul {
        list-style-type: none;
      }
    </style>
    <div role="menu" aria-label="Test menu" aria-orientation="vertical">
      <ul role="group" aria-label="Test group 1">
        <li role="menuitem">Inbox: DOM</li>
        <li role="menuitem">Archive</li>
        <li role="menuitem">Trash</li>
      </ul>
      <ul role="group" aria-label="Test group 2">
        <li role="menuitem">Custom Folder 1</li>
        <li role="menuitem">Custom Folder 2</li>
        <li role="menuitem">Custom Folder 3</li>
      </ul>
      <ul role="group" aria-label="Test group 3">
        <li role="menuitem">New Folder</li>
      </ul>
    </div>
  </div>
`;

export const customElement = (): TemplateResult => html`
  <div>
    <style>
      axe-menuitem {
        display: list-item;
      }
    </style>
    <axe-menu aria-label="Test menu">
      <axe-group aria-label="Test group 1">
        <axe-menuitem>Inbox</axe-menuitem>
        <axe-menuitem>Archive</axe-menuitem>
        <axe-menuitem>Trash</axe-menuitem>
      </axe-group>
      <axe-group aria-label="Test group 2">
        <axe-menuitem>Custom Folder 1</axe-menuitem>
        <axe-menuitem>Custom Folder 2</axe-menuitem>
        <axe-menuitem>Custom Folder 3</axe-menuitem>
      </axe-group>
      <axe-group aria-label="Test group 3">
        <axe-menuitem>New Folder</axe-menuitem>
      </axe-group>
    </axe-menu>
  </div>
`;
