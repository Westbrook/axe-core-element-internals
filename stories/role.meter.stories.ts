/* eslint-disable lit-a11y/img-redundant-alt */
import { html, TemplateResult } from 'lit';

export default {
  title: 'role/meter',
};

export class Meter extends HTMLElement {
  // eslint-disable-next-line no-undef
  internals_!: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = 'meter';
    this.internals_.ariaValueMin = '0';
    this.internals_.ariaValueMax = '100';
    this.internals_.ariaValueNow = '50';
    this.internals_.ariaValueText = 'at 50/100';
  }
}

customElements.define('axe-meter', Meter);

/**
 * The actual `<meter>` element is supported in broadly different ways across browser:
 * - Chrome: not at all
 * - Firefox: exactly as `role="meter"`
 * - WebKit: with support for the `optimum` attribute, which doesn't seem to have an `aria-*` corollary
 *
 * Tests build with <meter> have been commented out below.
 */

export const dom = (): TemplateResult => html`
  <div>
    <!-- <label for="fuel">Fuel level:</label>
		<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter> -->

    <label for="fuel-2" id="fuel-label-2">Fuel level:</label>
    <div
      role="meter"
      aria-labelledby="fuel-label-2"
      id="fuel-2"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuetext="at 50/100"
    ></div>
  </div>
`;

export const domNegative = (): TemplateResult => html`
  <div>
    <!-- <label for="fuel">Fuel level:</label>
		<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100: DOM</meter> -->

    <label for="fuel-2" id="fuel-label-2">Fuel level:</label>
    <div
      role="meter"
      aria-labelledby="fuel-label-2"
      id="fuel-2"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuetext="at 50/100: DOM"
    ></div>
  </div>
`;

export const customElement = (): TemplateResult => html`
  <div>
    <!-- <label for="fuel" id="fuel-label">Fuel level:</label>
		<axe-meter id="fuel" aria-labelledby="fuel-label"></axe-meter> -->
    <label for="fuel-2" id="fuel-label-2">Fuel level:</label>
    <axe-meter id="fuel-2" aria-labelledby="fuel-label-2"></axe-meter>
  </div>
`;
