import R from 'ramda';

// splitKeywords :: String -> [String]
const splitKeywords = R.pipe(
  R.unless(R.is(String), () => { throw new Error('Expected string, but got undefined'); }),
  R.split(','),
  R.map(R.trim),
  R.reject(R.isEmpty)
);

export default splitKeywords;
