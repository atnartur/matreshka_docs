/**
@member {string} Matreshka.Array#trackBy
@importance 2
@since 1.2
@abstract
@summary Свойство ``trackBy`` указывает на ключ идентификатора объектов, входящих в массив
@desc В случае, если клиент и сервер активно обмениваются данными (например, списком пользователей), а объекты, входящие в массив имеют уникальный ID (например, идентификатор пользователя), то перерисовка всей коллекции с нуля не имеет смысла. После того, как сервер вернул новую коллекцию, намного рациональнее проверить, есть ли в коллекции объект с таким же ID и, если объект найден, обновить его. Таким образом, не создаётся новый объект (экземпляр {@link Matreshka.Array#Model}) и не рисуется новый DOM узел.

``trackBy`` говорит о том, какой именно ключ модели является идентификатором. Используя это свойство работа приложения, в некоторых слуаях, получает серьезный прирост скорости при рендеринге огромных коллекций.

``trackBy`` работает только при использовании метода {@link Matreshka.Array#recreate}, так как это единственный метод "пересоздающий" коллекцию заново.

В примере ниже используется ``_id`` в качестве значения (значение может быть любым).

```js
var MyArray = MK.Class({
	'extends': MK.Array,
	trackBy: '_id'
	constructor: function() {
		//,,,
	}
});

var arr = new MyArray();

// добавит три объекта в массив
arr.recreate([
	{_id: 0, name: 'Foo'},
	{_id: 1, name: 'Bar'},
	{_id: 2, name: 'Baz'}
]);

// удалит объект с идентификатором 0
// добавит объект с идентификатором 3
// обновит объект с идентификатором 1, обновив name: Bar -> BarNew
// обновит объект с идентификатором 2, обновив name: Baz -> BazNew
// пересортирует коллекцию в соответствие с переданным данным
arr.recreate([
	{_id: 1, name: 'BarNew'},
	{_id: 3, name: 'Qux'},
	{_id: 2, name: 'BazNew'}
]);
```

Свойство может содержать специальное значение ``"$index"``, которое позволяет обновлять объект по индексу в коллекции.

```js
var MyArray = MK.Class({
	'extends': MK.Array,
	trackBy: '$index'
	constructor: function() {
		//,,,
	}
});

var arr = new MyArray();

// добавит три объекта в массив
arr.recreate([
	{name: 'Foo'},
	{name: 'Bar'},
	{name: 'Baz'}
]);

// обновит все три объекта новыми данными
// и добавит новый объект с именем Qux
arr.recreate([
	{name: 'NewFoo'},
	{name: 'NewBar'},
	{name: 'NewBaz'},
	{name: 'Qux'}
]);
```

@see {@link Matreshka.Array#recreate}
*/