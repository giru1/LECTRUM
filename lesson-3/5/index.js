/**
 * Задание 5
 *
 * Используя цикл найти факториал числа.
 * Факториал числа вывести в консоль.
 */

const number = Number(prompt('Введите число:')); // ИЗМЕНЯТЬ ЗАПРЕЩЕНО

//РЕШЕНИЕ
let result = 0

if (number) {
	if (!isNaN(number) && number > 0) {
		for (let i = 0; number > i; i++) {
			result = number * i;
		}
	} else {
		console.log('Значение не число или оно отрицательное')
	}
} else {
	console.log('Значение не существует')
}


console.log(result)