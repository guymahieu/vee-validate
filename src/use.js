import Validator from './core/validator';
import ErrorBag from './core/errorBag';
import { warn, isCallable } from './core/utils';

function use (plugin, options = {}) {
  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  plugin({ Validator, ErrorBag, Rules: Validator.rules }, options);
};

export default use;
