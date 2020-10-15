import { LazyService } from '@devim-front/service';

/**
 * Ленивое хранилище. Ленивое хранилище может иметь лишь единственный экземпляр,
 * который может быть получен с помощью статических методов get, with и use.
 */
export class LazyStore extends LazyService {}
