import test from 'tape';
import splitKeywords from './index';

test('splitKeywords', ({ deepEqual, end }) => {
  deepEqual(splitKeywords('uni, corns'), ['uni', 'corns'], 'simple');
  deepEqual(splitKeywords(',uni,, corns,meow,'), ['uni', 'corns', 'meow'], 'tricky');
  deepEqual(splitKeywords(), undefined, 'empty input');
  end();
});
