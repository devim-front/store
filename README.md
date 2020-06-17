# Devim Front: Store

Содержит реализацию шаблона проектирования 'хранилище' и его вариации.

## Установка

Подключите этот пакет в зависимости:

```bash
npm i -S @devim-front/store
```

## Общие концепции

Хранилище - это [сервис](https://github.com/devim-front/service), который использует механизмы библиотеки [mobx](https://mobx.js.org/README.html).

Хранилища являются средством взаимодействия сервисов и компонентов React. Так как сервисы по своей сути - событийно-ориентированный и асинхронный механизм, а дерево React лучше всего работает с цепочкой последовательных и синхронных изменений, следует выделить прослойку между этими архитектурными слоями. Именно для этой цели используются хранилища.

Хранилища сводят асинхронный алгоритм к последовательности состояний, которые используют компоненты React. Для примера рассмотрим процедуру авторизации. Пользователь ввел логин, пароль и отправил форму. Хранилище должно отправить эти данные на сервер, получить оттуда токен авторизации или ошибку, если введённые данные оказались неверны. Начальное состояние (перед отправкой):

```javascript
{
  loading: false,
  token: undefined,
  error: undefined
}
```

После того, как пользователь отправил форму, состояние хранилища изменилось:

```javascript
{
  loading: true,
  token: undefined,
  error: undefined,
}
```

Опираясь на это состояние (а конкретно на значение `loading`), мы можем показать индикатор загрузки. Далее, допустим, авторизация прошла успешно, и сервер вернул токен авторизации. Состояние изменилось:

```javascript
{
  loading: false,
  token: 'token',
  error: undefined,
}
```

Теперь, имея указанный токен, мы можем, например, перенаправить пользователя в его личный кабинет, используя компонент [Redirect](https://reacttraining.com/react-router/web/api/Redirect) из библиотеки [react-router-dom](https://github.com/ReactTraining/react-router).

Но, допустим, пользователь ввёл неверный пароль. Состояние для этого:

```javascript
{
  loading: false,
  token: undefined,
  error: Error,
}
```

В этом случае мы можем показать пользователю соответствующее уведомление.

Если приложение использует хранилища, задача компонентов сводится к тому, чтобы отобразить текущее состояние и пробрасывать действия пользователей на более высокий слой абстракции. Таким образом (и это важно), если в приложении есть слой хранилищ, то внутри компонентов не должно быть асинхронных функций.

### Связь с сервисами

Хранилища являются прямыми наследниками [сервисов](https://github.com/devim-front/service). Всё, что было сказано про сервисы в соответствующей статье, справедливо и для хранилищ. Следовательно, хранилища также делятся на свободные ([FreeStore](https://github.com/devim-front/store/blob/master/docs/classes/freestore.md)), строгие ([StrictStore](https://github.com/devim-front/store/blob/master/docs/classes/strictstore.md)) и ленивые ([LazyStore](https://github.com/devim-front/store/blob/master/docs/classes/lazystore.md)); и точно так же имеют поддержку событий и механизм `dispose`.

## API

Документация находится [в этом разделе](https://github.com/devim-front/store/tree/master/docs).

## Пример

Продолжим наш [пример из статьи о сервисах](https://github.com/devim-front/service#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80). Чтобы компоненты смогли обрабатывать глобальные ошибки приложения, нужно создать специальное хранилище.

```typescript
// ErrorStore.ts
import { LazyStore } from '@devim-front/store';
import { observable, action, computed } from 'mobx';

import { ErrorService } from './ErrorService';

export class ErrorStore extends LazyStore {
  @observable
  public error?: Error;

  public get isError() {
    return this.error != null;
  }

  @action
  private handleError = (error: Error) => {
    this.error = error;
  };

  @action
  reset() {
    this.error = undefined;
  }

  public constructor() {
    super();
    ErrorService.get().on('error', this.handleError);
  }

  public dispose() {
    super.dispose();
    ErrorService.get().off('error', this.handleError);
  }
}
```

Теперь на возникновение глобальной ошибки могут отреагировать компоненты React. Как пример использования хранилища создадим компонент, который перенаправляет пользователя на страницу авторизации, если возникло исключение типа `NotAuthorizedError`:

```typescript
import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import { NotAuthorizedError } from './NotAuthorizedError';
import { ErrorStore } from './ErrorStore';

const NotAuthorizedRedirect: FC = () => {
  const { error } = ErrorStore.get();
  const isRedirect = error instanceof NotAuthorizedError;

  if (!isRedirect) {
    return null;
  }

  ErrorStore.get().reset();

  return <Redirect to="/sign-in" />;
};

const component = observer(NotAuthorizedRedirect);
export { component as NotAuthorizedRedirect };
```
