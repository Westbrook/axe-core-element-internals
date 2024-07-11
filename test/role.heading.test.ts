import { fixture, expect } from '@open-wc/testing';
import { a11ySnapshot } from '@web/test-runner-commands';

import {
  dom,
  domNegative,
  customElement,
} from '../stories/role.heading.stories.js';

describe('heading', () => {
  it('is equivelent between DOM and custom elements', async () => {
    const domTest = await fixture<HTMLImageElement>(dom());
    const domTree = await a11ySnapshot({});
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

    expect(domTree).to.deep.equal(ceTree);
    expect(domNegativeTree).to.not.deep.equal(ceTree);
  });
});
