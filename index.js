import R from 'ramda';

// splitKeywords :: String -> [String]
const splitKeywords = R.pipe(
  R.defaultTo(''),
  R.split(','),
  R.map(R.trim),
  R.reject(R.isEmpty)
);

export default R.unary(R.unless(R.isNil, splitKeywords));
