/* eslint-env mocha */

import { deepEqual, throws } from 'assert';
import splitKeywords from './index';

it('should splitKeywords', () =>
  deepEqual(splitKeywords('uni, corns'), ['uni', 'corns']));

it('should splitKeywords tricky', () =>
  deepEqual(splitKeywords(',uni,, corns,meow,'), ['uni', 'corns', 'meow']));

it('should splitKeywords empty input', () =>
  throws(() => { splitKeywords(); }, /`keywords` should be String/));

it('should splitKeywords invalid input', () =>
  throws(() => { splitKeywords(1); }, /`keywords` should be String/));
