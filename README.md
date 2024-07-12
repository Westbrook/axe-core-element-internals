## Element Internals vs Native Element Accessibility Tree

This project tests the delta between the accessibility tree created by native elements with built-in or applied roles, relationships, and `aria-*` content verus the same provided via Element Internals. While ensuring that the trees created by this approach are the same may be a path to preparing `axe-core` to add support for Element Internals in their tooling (see https://github.com/dequelabs/axe-core/issues/4259), the knowledge of the accessibility tree delivered via various combinations of Element Internal values can help educate developers looking to leverage the API, as well as clarify places where browser support is lumpy and in need of additional work.

### Getting started

Once you've cloned the project and used NPM to install dependencies, you can run `npm start` to see a Storybook full of the patterns that have been covered to date. Running `npm test` will show you the output of the currently available tests in the suite as they compare the contents of the Storybook against itself. You can also leverage `npm run test:watch` to keep the tests running in your terminal. While the tests are running, press the `f` key on your keyboad to get a list of the files under test and choose a specific one to focus on.

### Adding a pattern

When you're ready to add a pattern for test, start by outlining a story for the pattern. Currently, `role` is the only context under comparison, so find a `role` you want to test and create a new story for it in teh `stories` directory. Use the naming convention `role.${role under test}.stories.ts` so it is easier to see what's been covered to date in the file tree. While you are creating files, do the same for a test file following the naming contention `role.${role under test}.stories.ts` in the `test` directory.

Within the story file you have created, you may want to duplicate the contents of another story file to get started. Each story file currently exports a `dom` story that fully realizes the accessibility pattern in native DOM (sometimes that is built-in elements, like `<img>`, and other time that is use of the `role` and associated `aria-*` attributes), a `domNegative` story, which duplicates this with a specific label that sets it apart from the default output, and a `customElement` story rebuilding the pattern leveraging custom elements with Element Internals attached. Within the story file it self you can define the custom element that surfaces this pattern. _**NOTE: If your story consists of more than one sibling element, be sure to give it a wrapping element so that it can be appropriately cleaned up in the test files.**_

Within the test file you have created, you may want to duplicate the contents of another test file to get started. In the case that your stories line up 100%, you should be able to get away with only changing the file from which you import that various stories under test and the name of the test `description`.

#### Customizing a story

In some cases Element Internals is not enough to duplicate the output of the native accessibility pattern. This can look like the tests for `role="list"` wherein there are specific styles that need to be applied to the Element Internals attached custom element to ensure that the accessibility tree that is delivered is the same as the native implementation. It can also look like the tests for `role="meter"` wherein external content like `<label>` elements or the like are required. Requirements in this area will become clear while testing your stories as the accessibility tree surfaced in each pattern will be logged to you terminal for comparison.

### Goals

- get `axe-core` ready to add support for `.attachInternals()` within their tools
- surface valuable best practices for custom element developers looking to deliver accessible content
- discover places where cross browser compatibility of both `.attachInternal()` as well as native implementation of accessible patterns is lumpy or lacking

### Non-goals

- ?

## To Do:
- [ ] add templating to make adding support for a new pattern easier (see: https://plopjs.com/ or similar)
- [ ] add documentation around scope (see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles for `role` coverage, but where to include that, and more, in the repo? see also: https://github.com/dequelabs/axe-core/issues/4259#issuecomment-2223530771)
- [ ] clarify testing scope for manual checking
- [ ] add any additional "goals" or "non-goals"
- [ ] catch up on the process to add accessibility testing to [WPTs](https://web-platform-tests.org/) to understand whether we can upstream any of our findings there