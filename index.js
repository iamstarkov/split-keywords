import R from 'ramda';

// splitKeywords :: String -> [String]
const splitKeywords = R.unary(R.pipe(
  R.unless(R.is(String), () => { throw new Error('`keywords` should be String'); }),
  R.split(','),
  R.map(R.trim),
  R.reject(R.isEmpty)
));

export default splitKeywords;
