import R from 'ramda';
import c from 'rho-contracts';

// splitKeywords :: String -> [String]
const splitKeywords = R.pipe(
  keywords => c.string.check(keywords),
  R.split(','),
  R.map(R.trim),
  R.reject(R.isEmpty)
);

export default splitKeywords;
