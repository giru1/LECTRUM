/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

function f() {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (typeof(+arguments[i]) !== 'number') {
			throw new TypeError("Не корректный тип данных(необходим тип данных 'число')");
		}
		result += +arguments[i]
	}
	return result
}
try {
	console.log(f(1, 1, 1, 2, 1, 1, 1, '1')); // 9
	console.log(f(1, 1, 1)); // 3
	console.log(f(1, 1, 5, 98,)); // 105
}catch (e) {
	console.log(e.name)
	console.log(e.message)
}


