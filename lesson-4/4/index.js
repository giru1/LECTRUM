/*
 * Задача 4.
 *
 * Дописать требуемый функционал что бы код работал правильно.
 * 
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Необходимо из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120, а именно число 120.
 *
 * Подсказка:
 * - Для проверки на NaN нужно использовать isNaN(); 
 *   https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Number/isNaN
*/

const PRICE = '$' + prompt('Введите стоимость продукта'); // ИЗМЕНЯТЬ ЗАПРЕЩЕНО

// РЕШЕНИЕ

if (PRICE) {
	let result = Number(PRICE.slice(1))
	if (isNaN(result) === false) {
		console.log(result)
		console.log(typeof(result))
	} else {
		console.log('Значение не число')
	}
} else {
	console.log('Значение не заполнено')
}