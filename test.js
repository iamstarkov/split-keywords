/* eslint-env mocha */

import { equal } from 'assert';
import splitKeywords from './index';

it('should splitKeywords', () =>
  equal(splitKeywords('unicorns'), 'unicorns'));

it('should splitKeywords invalid input', () =>
  equal(splitKeywords(), undefined));
