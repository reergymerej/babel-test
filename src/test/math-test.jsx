import {will} from 'willy';
import math from '../math';

describe('add', () => {
  it('should return the sum of the two params', () => {
    will(math.add(1, 2)).be(3);
  });
});

describe('subtract', () => {
  it('should return the difference of the two params', () => {
    will(math.subtract(9, 6)).be(3);
  });
});
