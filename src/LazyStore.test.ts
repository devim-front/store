import { assert } from 'chai';

import { LazyStore } from './LazyStore';

describe('LazyStore', () => {
  describe('LazyStore.constructor', () => {
    it("shouldn't throws an error", () => {
      class Store extends LazyStore {}

      assert.doesNotThrow(() => {
        Store.get();
      });
    });
  });
});
