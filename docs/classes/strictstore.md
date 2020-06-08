[@devim-front/store](../README.md) › [StrictStore](strictstore.md)

# Class: StrictStore ‹**E**›

Строгое хранилище.

## Type parameters

▪ **E**: *[StoreEvents](../README.md#markdown-header-storeevents)*

Коллекция событий хранилища.

## Hierarchy

* StrictService‹E›

  ↳ **StrictStore**

## Index

### Constructors

* [constructor](strictstore.md#markdown-header-constructor)

### Properties

* [instance](strictstore.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](strictstore.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](strictstore.md#markdown-header-dispose)
* [emit](strictstore.md#markdown-header-protected-emit)
* [off](strictstore.md#markdown-header-off)
* [on](strictstore.md#markdown-header-on)
* [create](strictstore.md#markdown-header-static-protected-create)
* [delete](strictstore.md#markdown-header-static-delete)
* [get](strictstore.md#markdown-header-static-get)
* [init](strictstore.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new StrictStore**(...`args`: any[]): *[StrictStore](strictstore.md)*

*Inherited from [StrictStore](strictstore.md).[constructor](strictstore.md#markdown-header-constructor)*

*Overrides [LazyStore](lazystore.md).[constructor](lazystore.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Аргументы, полученные из метода init.  |

**Returns:** *[StrictStore](strictstore.md)*

## Properties

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

*Inherited from [LazyStore](lazystore.md).[instance](lazystore.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-static-protected-isexists" name="markdown-header-static-protected-isexists"></a> `Static` `Protected` isExists

• **get isExists**(): *boolean*

*Inherited from [LazyStore](lazystore.md).[isExists](lazystore.md#markdown-header-static-protected-isexists)*

Указывает, что экземпляр данного класса уже был создан.

**Returns:** *boolean*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [LazyStore](lazystore.md).[dispose](lazystore.md#markdown-header-dispose)*

*Overrides [FreeStore](freestore.md).[dispose](freestore.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Для строго или ленивого сервиса прямой вызов этого метода
запрещён и приведет к ошибке, поскольку это может создать неоднозначность
в коде. Используйте вместо него статический метод delete.

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

___

### <a id="markdown-header-static-protected-create" name="markdown-header-static-protected-create"></a> `Static` `Protected` create

▸ **create**‹**T**›(...`args`: ConstructorParameters‹T›): *void*

*Inherited from [LazyStore](lazystore.md).[create](lazystore.md#markdown-header-static-protected-create)*

Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
следует использовать именно его; вызов оператора new приводит к ошибке.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | ConstructorParameters‹T› | Аргументы конструктора.  |

**Returns:** *void*

___

### <a id="markdown-header-static-delete" name="markdown-header-static-delete"></a> `Static` delete

▸ **delete**(): *void*

*Inherited from [LazyStore](lazystore.md).[delete](lazystore.md#markdown-header-static-delete)*

Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**‹**T**›(`this`: T): *InstanceType‹T›*

*Inherited from [StrictStore](strictstore.md).[get](strictstore.md#markdown-header-static-get)*

*Overrides void*

Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
методом init, вызов get приведёт к ошибке.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

**Returns:** *InstanceType‹T›*

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(...`args`: any[]): *void*

*Inherited from [StrictStore](strictstore.md).[init](strictstore.md#markdown-header-static-init)*

*Overrides void*

Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
переданы в конструктор класса. Если вызвать метод инициализации повторно с
теми же аргументами, то новый экземпляр создан не будет. Если же при
повторном вызове метода аргументы изменятся, то предыдущий экземпляр
сервиса будет уничтожен через метод delete и создан новый. Чтобы
пересоздать сервис с теми же аргументами, используйте метод delete, а
уж затем init.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Аргументы, которые будут переданы в конструктор.  |

**Returns:** *void*
