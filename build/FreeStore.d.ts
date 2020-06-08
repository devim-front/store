import { FreeService } from '@devim-front/service';
import { StoreEvents } from './StoreEvents';
import { FreeStoreEvents } from './FreeStoreEvents';
/**
 * Свободный сервис.
 *
 * @template E Коллекция событий свободного хранилища.
 */
export declare class FreeStore<E extends StoreEvents = FreeStoreEvents> extends FreeService<E> {
}
