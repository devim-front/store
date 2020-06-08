import { StrictService } from '@devim-front/service';
import { StoreEvents } from './StoreEvents';
import { StrictStoreEvents } from './StrictStoreEvents';
/**
 * Строгое хранилище.
 *
 * @template E Коллекция событий хранилища.
 */
export declare class StrictStore<E extends StoreEvents = StrictStoreEvents> extends StrictService<E> {
}
