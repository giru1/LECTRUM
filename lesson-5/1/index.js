/**
 * Задача 1.
 *
 * Создайте свойство `salary` в объекте `person`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Возвращаемая стрка должна содержать текст: `Зарплата за проект составляет 100$`
 * Где 100 это произведение ставки в час `rate` на количество отработанных часов `hours`
 *
 * Создайте свойство `rate` в объекте `person`.
 * Свойство `rate` можно менять, но нельзя удалять.
 * Свойство `rate` должно содержать число.
 *
 * Создайте свойство `hours` в объекте `person`.
 * Свойство `hours` можно менять, но нельзя удалять.
 * Свойство `hours` должно содержать число.
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 *
 * Обратите внимание!
 * - Для того что бы обратиться к свойству объекта необходимо использовать this.hours и this.rate
 * - Для решения данного задания вам потребуется defineProperty или defineProperties
 */

const person = {};

// РЕШЕНИЕ


Object.defineProperties(person, {
	rate: {
		configurable: false,
		get() {
			return rate_val
		},
		set(num) {
			if (!isNaN(num) === true) {
				rate_val = num
			} else {
				console.log('Not number')
				rate_val = null
			}
		}
	},
	hours: {
		configurable: false,
		get() {
			return hours_val
		},
		set(num) {
			if (!isNaN(num) === true) {
				hours_val = num
			} else {
				console.log('Not number')
				hours_val = null
			}
		}
	},
	salary: {
		get() {
			if(!isNaN(this.rate) === true && this.rate > 0 && !isNaN(this.hours) === true && this.hours > 0) {
				let result = this.rate * this.hours;
				return `Зарплата за проект составляет ${result}$`;
			} else {
				console.log('Одно из производных не число')
			}
		}
	}
})

person.rate = prompt('rate');
person.hours = prompt('hours');
console.log(person.salary); // `Зарплата за проект составляет ххх$`

delete person.rate;
delete person.hours;
console.log(person);