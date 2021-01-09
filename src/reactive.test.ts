import { assert } from 'chai';
import { Pool } from '@devim-front/service';
import { observable, isObservableProp } from 'mobx';

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
    assert.isTrue(isObservableProp(store, 'foo'));
  });

  it('should works with LazyStore', () => {
    @reactive
    class Store extends LazyStore {
      @observable
      public foo: string = 'foo';
    }

    const pool = new Pool();
    const store = Store.get(pool);

    assert.isTrue(isObservableProp(store, 'foo'));
  });

  it('should works even if the decorator is duplicated in a parent and a nested classes', () => {
    @reactive
    class ParentStore extends FreeStore {
      @observable
      public foo: string = 'foo';
    }

    @reactive
    class NestedStore extends ParentStore {
      @observable
      public bar: string = 'bar';
    }

    @reactive
    class FinalStore extends NestedStore {}

    const store = new FinalStore();

    assert.isTrue(isObservableProp(store, 'foo'));
    assert.isTrue(isObservableProp(store, 'bar'));
  });
});
