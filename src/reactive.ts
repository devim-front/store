import { makeObservable } from 'mobx';

/**
 * Класс хранилища.
 */
type Target = new (...args: any[]) => {};

/**
 * Свойство класса, в котором хранится количество раз, которое к этому классу
 * был применён декоратор `reactive`.
 */
const STACK_DEPTH = Symbol('STACK_DEPTH');

/**
 * Свойство экземпляра класса, в котором хранится уровень текущего вызова
 * конструктора `ReactiveStore` в стеке вызовов контрукторов.
 */
const STACK_INDEX = Symbol('STACK_INDEX');

/**
 * Возвращает класс, унаследованный от указанного, который запускает механизмы
 * observable, action и computed для его свойств и методов.
 *
 * @param target Класс хранилища.
 */
export const reactive = <T extends Target>(target: T) => {
  /**
   * Запускает механизмы mobx для членов родительского класса.
   */
  class ReactiveStore extends target {
    /**
     * Создаёт экземпляр хранилища.
     * @param args Аргументы.
     */
    public constructor(...args: any[]) {
      super(...args);

      // @ts-ignore
      const depth: number = this.constructor[STACK_DEPTH];

      // @ts-ignore
      let index: number = this[STACK_INDEX] ?? 0;
      index += 1;
      // @ts-ignore
      this[STACK_INDEX] = index;

      if (index === depth) {
        makeObservable(this);
      }
    }
  }

  // @ts-ignore
  let depth: number = ReactiveStore[STACK_DEPTH] ?? 0;
  depth += 1;

  // @ts-ignore
  ReactiveStore[STACK_DEPTH] = depth;

  return ReactiveStore;
};
