import { defaultReporter } from '@web/test-runner';
import defaultConfig from './web-test-runner.config.js';

const filteredLogs = ['Running in dev mode', 'Lit is in dev mode', 'axe-core-element-internals'];

const reporter = defaultReporter({ reportAtEnd: true });

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  ...defaultConfig,
  concurrentBrowsers: 1,
  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },
  reporters: [reporter]
});
