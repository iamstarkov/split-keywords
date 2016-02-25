/* eslint-env mocha */

import { deepEqual } from 'assert';
import splitKeywords from './index';

it('should splitKeywords', () =>
  deepEqual(splitKeywords('uni, corns'), ['uni', 'corns']));

it('should splitKeywords tricky', () =>
  deepEqual(splitKeywords(',uni,, corns,meow,'), ['uni', 'corns', 'meow']));

it('should splitKeywords empty input', () =>
  deepEqual(splitKeywords(), undefined));
