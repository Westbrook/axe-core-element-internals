import { fixture, expect } from '@open-wc/testing';
import { a11ySnapshot } from '@web/test-runner-commands';

import {
  dom,
  domNegative,
  customElement,
} from '../stories/role.menu.stories.js';
import { isWebKit } from './helpers/platform.js';

describe('menu', () => {
  it('is equivelent between DOM and custom elements', async () => {
    const domTest = await fixture<HTMLImageElement>(dom());
    const domTree = await a11ySnapshot({});
    await expect(domTest).to.be.accessible();
    domTest.remove();

    const domNegativeTest = await fixture<HTMLImageElement>(domNegative());
    const domNegativeTree = await a11ySnapshot({});
    domNegativeTest.remove();

    const ceTest = await fixture<HTMLImageElement>(customElement());
    const ceTree = await a11ySnapshot({});
    ceTest.remove();

    console.log(
      'axe-core-element-internals',
      JSON.stringify(domNegativeTree, null, '  '),
    );
    console.log(
      'axe-core-element-internals',
      JSON.stringify(domTree, null, '  '),
    );
    console.log(
      'axe-core-element-internals',
      JSON.stringify(ceTree, null, '  '),
    );

    /**
     * WebKit does not access `el.internals_ = 'menu'`.
     * @todo(westbrook): create a WPT for this, somehow.
     */
    if (!isWebKit()) {
      expect(domTree).to.deep.equal(ceTree);
    } else {
      // Make the comparison in the negative in case changed to WebKit or Playwright
      // or something else cause this test to pass without manual intervention.
      expect(domTree).to.not.deep.equal(ceTree);
    }
    expect(domNegativeTree).to.not.deep.equal(ceTree);
  });
});
