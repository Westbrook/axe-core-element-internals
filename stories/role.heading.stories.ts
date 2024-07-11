/* eslint-disable max-classes-per-file */
/* eslint-disable lit-a11y/img-redundant-alt */
import { html, TemplateResult } from 'lit';

export default {
  title: 'role/heading',
};

class Heading1 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '1';
  }
}

customElements.define('axe-h1', Heading1);

class Heading2 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '2';
  }
}

customElements.define('axe-h2', Heading2);

class Heading3 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '3';
  }
}

customElements.define('axe-h3', Heading3);

class Heading4 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '4';
  }
}

customElements.define('axe-h4', Heading4);

class Heading5 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '5';
  }
}

customElements.define('axe-h5', Heading5);

class Heading6 extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'heading';
    this.internals_.ariaLevel = '6';
  }
}

customElements.define('axe-h6', Heading6);

export const dom = (): TemplateResult => html`
  <div>
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
  </div>
`;

export const domNegative = (): TemplateResult => html`
  <div>
    <h1>Heading level 1: DOM</h1>
    <h2>Heading level 2: DOM</h2>
    <h3>Heading level 3: DOM</h3>
    <h4>Heading level 4: DOM</h4>
    <h5>Heading level 5: DOM</h5>
    <h6>Heading level 6: DOM</h6>
  </div>
`;

export const customElement = (): TemplateResult => html`
  <div>
    <style>
      /**
			* Without "display: block" browser add an additional empty text node for each element below.
			*/
      div > *:not(style) {
        display: block;
      }
    </style>
    <axe-h1>Heading level 1</axe-h1>
    <axe-h2>Heading level 2</axe-h2>
    <axe-h3>Heading level 3</axe-h3>
    <axe-h4>Heading level 4</axe-h4>
    <axe-h5>Heading level 5</axe-h5>
    <axe-h6>Heading level 6</axe-h6>
  </div>
`;
