/*
 * Задача 2.
 *
 * Дописать требуемый функционал что бы код работал правильно.
 * 
 * Необходимо присвоить переменной result значение true, 
 * если строка source содержит подстроку spam. Иначе — false.
 * 
 * Пример 1: source -> pitterXXX@gmail.com, 
 *           spam -> 'xxx', 
 *           result -> true;
 * 
 * Пример 2: source -> pitterXXX@gmail.com, 
 *           spam -> 'XXX',
 *           result -> true;
 * 
 * Пример 3: source -> pitterXXX@gmail.com, 
 *           spam -> 'sss',
 *           result -> false;
 *
 * Условия:
 * - Строки должны быть не чувствительными к регистру
 * - Нужно использовать метод include() 
 *   https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/includes
 */

const source = prompt('Введите электропочту:'); // ИЗМЕНЯТЬ ЗАПРЕЩЕНО
const spam = prompt('Введите строку, которую нужно найти в электропочте'); // ИЗМЕНЯТЬ ЗАПРЕЩЕНО
let result = null;

// РЕШЕНИЕ

if (source || spam) {
	result = source.toLowerCase().includes(spam.toLowerCase())
} else {
	console.log('Одно из значение не добавлено')
}

console.log(result)