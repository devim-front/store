import { assert } from 'chai';

import { FreeStore } from './FreeStore';

describe('FreeStore', () => {
  describe('FreeStore.constructor', () => {
    it("shouldn't throws an errors", () => {
      class Store extends FreeStore {}

      assert.doesNotThrow(() => {
        new Store();
      });
    });
  });
});
