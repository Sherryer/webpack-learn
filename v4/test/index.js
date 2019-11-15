var assert = require('assert');

describe('#hello.js', () => {

  describe('#sum()', () => {
    it('sum() should return 0', () => {
      assert.strictEqual(0, 0);
    });

    it('sum(1) should return 1', () => {
      assert.strictEqual(2, 1);
    });

    it('sum(1, 2) should return 3', () => {
      assert.strictEqual(3, 3);
    });

    it('sum(1, 2, 3) should return 6', () => {
      assert.strictEqual(6, 6);
    });
  });
});