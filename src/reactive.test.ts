import { assert } from 'chai';
import { Pool } from '@devim-front/service';
import { observable } from 'mobx';

import { FreeStore } from './FreeStore';
import { LazyStore } from './LazyStore';
import { reactive } from './reactive';

describe('reactive', () => {
  it('should works with FreeStore', () => {
    @reactive
    class Store extends FreeStore {
      @observable
      public foo: string = 'foo';
    }

    const store = new Store();
    assert.instanceOf(store, Store);
  });

  it('should works with LazyStore', () => {
    @reactive
    class Store extends LazyStore {
      @observable
      public foo: string = 'foo';
    }

    const pool = new Pool();
    const store = Store.get(pool);

    assert.instanceOf(store, Store);
  });
});
