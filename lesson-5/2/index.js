/*
 * Задача 2.
 *
 * Создайте объект `user`, со свойствами `name`, `surname`, `job` и `data`.
 *
 * При чтении свойства `data` должна возвращаться строка с текстом.
 * Возвращаемая строка должна содержать текст: `Привет! Я `name` `surname` и я работаю `job` `.
 *
 *
 * Значения свойств `name`, `surname`, `job` в объекте `user` нужно получать из функции prompt().
 *
 * Условия:
 * - Свойство `data` обязательно должно быть геттером.
 *
 * Обратите внимание!
 * - Для того что бы обратиться к свойству объекта необходимо использовать this.name, this.surname и this.job. *
 */

// РЕШЕНИЕ

const user = {}

Object.defineProperties(user,  {
	name: {
		get() {
			return val_name
		},
		set(str) {
			val_name = str
		}
	},
	surname: {
		get() {
			return val_surname
		},
		set(str) {
			val_surname = str
		}
	},
	job: {
		get() {
			return val_job
		},
		set(str) {
			val_job = str
		}
	},
	data: {
		get() {
			if (this.name && 0 !== this.name.length && this.surname && 0 !== this.surname.length && this.job && this.job.length !== 0) {
				return `Привет! Я ${this.name} ${this.surname} и я работаю ${this.job}`
			} else {
				console.log('Одно из значение не заполнено')
			}
			
		}
	}
})

user.name = prompt('Введите name')
user.surname = prompt('Введите surname')
user.job = prompt('Введите job')

console.log(user.data)