import { makeObservable } from 'mobx';

/**
 * Класс хранилища.
 */
type Target = new (...args: any[]) => {};

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
  return class ObservableStore extends target {
    /**
     * Создаёт экземпляр хранилища.
     * @param args Аргументы.
     */
    public constructor(...args: any[]) {
      super(...args);
      makeObservable(this);
    }
  };
};
