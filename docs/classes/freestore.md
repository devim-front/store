[@devim-front/store](../README.md) › [FreeStore](freestore.md)

# Class: FreeStore ‹**E**›

Свободный сервис.

## Type parameters

▪ **E**: *[StoreEvents](../README.md#markdown-header-storeevents)*

Коллекция событий свободного хранилища.

## Hierarchy

* FreeService‹E›

  ↳ **FreeStore**

## Index

### Methods

* [dispose](freestore.md#markdown-header-dispose)
* [emit](freestore.md#markdown-header-protected-emit)
* [off](freestore.md#markdown-header-off)
* [on](freestore.md#markdown-header-on)

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [FreeStore](freestore.md).[dispose](freestore.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Помимо этого, отключает все добавленные обработчики событий
сервиса.

**Returns:** *void*

___

### <a id="markdown-header-protected-emit" name="markdown-header-protected-emit"></a> `Protected` emit

▸ **emit**‹**T**›(`event`: T, ...`args`: Parameters‹E[T]›): *void*

*Inherited from [FreeStore](freestore.md).[emit](freestore.md#markdown-header-protected-emit)*

Вызывает указанное событие, передавая аргументы в его обработчики.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`...args` | Parameters‹E[T]› | Аргументы, передаваемые в обработчики.  |

**Returns:** *void*

___

### <a id="markdown-header-off" name="markdown-header-off"></a>  off

▸ **off**‹**T**›(`event`: T, `handler`: E[T]): *void*

*Inherited from [FreeStore](freestore.md).[off](freestore.md#markdown-header-off)*

Удаляет указанный обработчик события.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-on" name="markdown-header-on"></a>  on

▸ **on**‹**T**›(`event`: T, `handler`: E[T]): *void*

*Inherited from [FreeStore](freestore.md).[on](freestore.md#markdown-header-on)*

Добавляет обработчик указанному событию.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*
