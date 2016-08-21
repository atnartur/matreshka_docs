/**
@method Matreshka.Array#rerender
@importance 3
@since 0.3
@summary Перерисовывает DOM узлы элементов, входящих в массив
@desc Этот метод заново рендерит элементы массива в контейнере массива. Если узел, который ассоциирован с элеменом масива уже создан, метод, вместо перерисовки с нуля, "перевставляет" его в контейнер или песочницу массива.

Метод может быть полезным на случай, когда элементы добавлены в массив перед объявлением песочницы или контейнера.

Начиная с версии 1.1, для того, чтоб заставить массив перерисоваться, независимо от наличия отрендеренных узлов (например, вы используете handlebars в ``itemRenderer``), передайте в метод объект со свойством ``forceRerender`` равным ``true``.
@param {object} [options] - Объект с флагами (на сегодняшний день, единственный флаг - ``forceRerender``)
@returns {matreshkaArray} self
@example
this.rerender({
	forceRerender: true
});
*/