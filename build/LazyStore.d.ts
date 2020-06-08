import { LazyService } from '@devim-front/service';
import { StoreEvents } from './StoreEvents';
import { LazyStoreEvents } from './LazyStoreEvents';
/**
 * Ленивое хранилище.
 *
 * @template E Коллекция событий хранилища.
 */
export declare class LazyStore<E extends StoreEvents = LazyStoreEvents> extends LazyService<E> {
}
