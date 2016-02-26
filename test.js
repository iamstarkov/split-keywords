import test from 'ava';
import splitKeywords from './index';

test('should splitKeywords', (t) =>
  t.same(splitKeywords('uni, corns'), ['uni', 'corns']));

test('should splitKeywords tricky', (t) =>
  t.same(splitKeywords(',uni,, corns,meow,'), ['uni', 'corns', 'meow']));

test('should splitKeywords empty input', (t) =>
  t.same(splitKeywords(), undefined));
