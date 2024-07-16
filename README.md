## Element Internals vs Native Element Accessibility Tree

This project tests the delta between the accessibility tree created by native elements with built-in or applied roles, relationships, and `aria-*` content verus the same provided via Element Internals. While ensuring that the trees created by this approach are the same may be a path to preparing `axe-core` to add support for Element Internals in their tooling (see https://github.com/dequelabs/axe-core/issues/4259), the knowledge of the accessibility tree delivered via various combinations of Element Internal values can help educate developers looking to leverage the API, as well as clarify places where browser support is lumpy and in need of additional work.

### Getting started

Once you've cloned the project and used NPM to install dependencies, you can run `npm start` to see a Storybook full of the patterns that have been covered to date. Running `npm test` will show you the output of the currently available tests in the suite as they compare the contents of the Storybook against itself. You can also leverage `npm run test:watch` to keep the tests running in your terminal. While the tests are running, press the `f` key on your keyboad to get a list of the files under test and choose a specific one to focus on.

### Adding a pattern

When you're ready to add a pattern for test, start by stamping new files for the `role` you are looking to add by running `npm run new`. You'll be asked for the reol you're looking to cover; if you've not already decided one, you can find a list [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles). This will create a new file in each of the `stories` and `test` directories pertaining to the role that you have chosen to cover. While the `test` file that is corrected should not need any edits, the file in the `story` directory will require additional input.

With in the `role.${role}.stories.ts` file:
1. find the text "Place positive DOM demo here." and replace it with a DOM only representation of the `role` you have selected. See a combination of existing stories, [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), and the [Aria APG](https://www.w3.org/WAI/ARIA/apg/) for assistance in doing this.
2. find the text "Place negative DOM demo here." and replace it with the DOM only representation from above. However, change something in the example that will propagate to the accessibility tree (e.g. an `aria-label` attribute) to ensure that the AT will not be equal to that found in the above demonstration.
3. find the `CustomRoleElement` class definition and ensure that it fully complied with the requirements of the `role` you have selected. Then fine the `customElement` export and customize the DOM that it returned to appropriate leverage those APIs. For more advanced patters, additional DOM and/or custom elements may be required to complete the comparison between the DOM-only and the `ElementInternals` implementations.

_NOTE: The default stories are wrapped in `<div>` elements, but if, after edits, your story consists of more than one sibling element at the top level, be sure to give it a wrapping element so that it can be appropriately cleaned up in the test files._

#### Customizing a story

In some cases Element Internals is not enough to duplicate the output of the native accessibility pattern. This can look like the tests for `role="list"` wherein there are specific styles that need to be applied to the Element Internals attached custom element to ensure that the accessibility tree that is delivered is the same as the native implementation. It can also look like the tests for `role="meter"` wherein external content like `<label>` elements or the like are required. Requirements in this area will become clear while testing your stories as the accessibility tree surfaced in each pattern will be logged to you terminal for comparison.

### Goals

- get `axe-core` ready to add support for `.attachInternals()` within their tools
- surface valuable best practices for custom element developers looking to deliver accessible content
- discover places where cross browser compatibility of both `.attachInternal()` as well as native implementation of accessible patterns is lumpy or lacking

### Non-goals

- visual parity between native and `.attachInternals()` based implementations

## To Do:
- [ ] add documentation around scope (see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles for `role` coverage, but where to include that, and more, in the repo? see also: https://github.com/dequelabs/axe-core/issues/4259#issuecomment-2223530771)
- [ ] clarify testing scope for manual checking
- [ ] add any additional "goals" or "non-goals"
- [ ] catch up on the process to add accessibility testing to [WPTs](https://web-platform-tests.org/) to understand whether we can upstream any of our findings there