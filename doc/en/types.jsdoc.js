/**
Event handler. Takes any arguments passed to {@link Matreshka#trigger}
@callback eventHandler
@param {...*} options - Any arguments
@example
const eventHandler = () => {
	console.log(arguments);
}
this.on('fyeah', eventHandler);
this.trigger('fyeah', 'foo', 'bar', 'baz'); // logs 'foo', 'bar', 'baz'
*/


/**
{@link Matreshka} instance
@typedef {object} matreshka
*/

/**
{@link Matreshka.Object} instance
@typedef {object} matreshkaObject
*/


/**
{@link Matreshka.Array} instance
@typedef {object} matreshkaArray
*/


/**
Event name or space-delimited list of event names.

> This is very brief description of event names. The full article about events you can find at [this article](https://medium.com/@finom/matreshka-js-events-e35cc201c2cb).

##### Custom events.
```js
this.on('myevent', () => {...});
this.trigger('myevent');
```

##### ``change:KEY`` which is triggered every time when a property is changed.
```js
this.on('change:x', evt => {...});
this.x = 42;
```

##### ``beforechange:KEY``  which is triggered every time before a property is changed.
```js
this.on('beforechange:x', evt => {...});
this.x = 42;
```

##### ``bind:KEY`` and ``bind`` which are triggered after data binding.
```js
//for any property
this.on('bind', evt => {...});
//for "x" property
this.on('bind:x', evt => {...});
this.bindNode('x', '.my-node');
```

##### ``delete:KEY`` and ``delete`` which are triggered after property removal.
```js
//for any property
this.on('delete', evt => {...});
//for "x" property
this.on('delete:x', evt => {...});
this.remove('x');
```

##### ``addevent:NAME`` and ``addevent`` which are triggered on event initialization.
```js
//for any event
this.on('addevent', evt => {...});
//for "someevent" event
this.on('addevent:someevent', evt => {...});
//the line below fires "addevent" and "addevent:someevent"
this.on('someevent', evt => {...});
```

##### ``DOM_EVENT::KEY``, where DOM_EVENT is a name of DOM event, KEY is a key. A handler is called when DOM_EVENT is triggered on a node bound to the KEY.
```js
this.bindNode('x', '.my-div');
this.on('click::x', evt => {
	alert('clicked ".my-div"');
});
```

##### ``DOM_EVENT::KEY(SELECTOR)``, where DOM_EVENT is a name of DOM event, KEY is a key, SELECTOR is a selector. A handler is called when DOM_EVENT is triggered on a node which matches the SELECTOR within a node bound to the KEY.
```html
<div class="my-div">
	<button class="my-button"></button>
</div>
```
```js
this.bindNode('x', '.my-div');
this.on('click::x(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### ``DOM_EVENT::(SELECTOR)``, where DOM_EVENT is a name of DOM event, SELECTOR is a selector. A handler is called when DOM_EVENT is triggered on a node which matches the SELECTOR within a sandbox.

```js
this.bindNode('sandbox', '.my-div');
this.on('click::(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```
The same as:
```js
this.bindNode('sandbox', '.my-div');
this.on('click::sandbox(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### Delegated events: ``PATH@EVENT``, where PATH is a path to a target object whose events we want to listen, EVENT is an event name.
```js
this.on('a@someevent', () => {...});
this.on('a.b.c@change:d', () => {...});
```

If you need to listen an event of every item of {@link Matreshka.Array} or every data key of {@link Matreshka.Object}, you can use an asterisk "*" instead of specific  key.

```js
this.on('*@someevent', () => {...});
this.on('*.b.*.d@change:e', () => {...});
```

##### Any combinations. All events described above can be combined.
```js
this.on('x.y.z@click::(.my-selector)', () => {...});
```
@typedef {string} eventNames
*/


/**
``binder`` contains all information about how to synchronize instance property value with DOM node state. Every member of a binder uses HTML node as context (``this``)
@typedef {object} binder
@property {string|function} [on] - DOM event (or space-delimited list of events) which tells when node state is changed. Besides, it accepts a function as value if you need to customize listener definition
@property {function} [getValue] - A function which tells how to retrieve value (state) from HTML node when DOM event is fired
@property {function} [setValue] - A function which tells how to change DOM node when property value is changed
@property {function} [initialize] - A function which is called before binding is launched. For example it can initialize some jQuery plugin
@property {function} [destroy] - A function which is called when a binding is removed using ``unbindNode`` method
@example
const binder = {
	on: 'click',
	getValue(options) {
		return this.value;
	},
	setValue(v, options) {
		this.value = v;
	},
	initialize(options) {
		alert('A binding is initialized');
	},
	destroy(options) {
		alert('A binding is destroyed');
	}
};

this.bindNode('a', '.my-checkbox', binder);
@example
const binder = {
	on(callback) {
		this.onclick = callback;
	},
	// ...
};
// ...
*/


/**
Event object
@typedef {object} eventOptions
@desc An object which can contain service flags or custom data which will be passed to an event handler
@example
const eventOptions = {silent: true};

this.a = 1;

this.on('change:a', () => {
	alert('a is changed');
});

this.set('a', 2, eventOptions); // no alert
@example
const eventOptions = {f: 'yeah'};

this.a = 1;

this.on('change:a', eventOptions => {
	alert(eventOptions.f);
});

this.set('a', 2, eventOptions); // alerts "yeah"
*/


/**
A class (more precisely constructor of a class) returned by {@link Class} function
@typedef {function} class
@example
const MyClass = MK.Class({
	method() { ... }
});
*/


/**
DOM node
@typedef node
*/

/**
DOM nodes collection. For example, jQuery-node(s)
@typedef $nodes
*/


/**
String
@typedef string
*/

/**
Boolean
@typedef boolean
*/

/**
Number
@typedef number
*/

/**
Object
@typedef object
*/

/**
Array
@typedef array
*/

/**
Function
@typedef function
*/

/**
null
@typedef null
*/

/**
Any type
@typedef *
*/
