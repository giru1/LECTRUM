/**
 * Создать форму динамически при помощи JavaScript.
 * 
 * В html находится пример формы которая должна быть сгенерирована.
 * 
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 * 
 * Обязательно!
 * 1. Для генерации элементов обязательно использовать метод document.createElement
 * 2. Для установки атрибутов элементам обязательно необходимо использовать document.setAttribute
 * 3. Всем созданным элементам необходимо добавить классы как в разметке
 * 4. После того как динамическая разметка будет готова необходимо удалить код в HTML который находится между комментариями
*/

// РЕШЕНИЕ

const body   = document.querySelector('body');
const form   = document.createElement('form');

form.setAttribute('id', 'form')
body.append(form)

function createInputWrap(type, placeholder, textLabel) {
	// Добавил несколько условия для удобочитаемости
	const div = document.createElement('div');
	if (type === 'checkbox') {
		div.classList.add('form-group', 'form-check');
	}else {
		div.classList.add('form-group');
	}
	
	const label  = document.createElement('label');
	label.innerText = textLabel
	if (type === 'checkbox') {
		label.classList.add('form-check-label')
		label.setAttribute('for', 'exampleCheck1');
	} else {
		label.setAttribute('for', type);
	}
	
	const input  = document.createElement('input');
	input.setAttribute('type', type);
	if (type === 'checkbox') {
		input.setAttribute('id', 'exampleCheck1');
		input.classList.add('form-check-input');
	} else {
		input.setAttribute('id', type);
		input.classList.add('form-control');
		input.setAttribute('placeholder', placeholder);
	}
	
	if (type === 'checkbox') {
		div.append(input)
		div.append(label)
	} else {
		div.append(label)
		div.append(input)
	}
	return div
}

function createBtn(type, text, color) {
	const btn = document.createElement('button');
	btn.innerText = text
	btn.classList.add('btn', color)
	btn.setAttribute('type', 'submit')
	return btn
}

form.append(createInputWrap('email', 'Введите свою электропочту', 'Электропочта'))
form.append(createInputWrap('password', 'Введите пароль', 'Пароль'))
form.append(createInputWrap('checkbox', '', 'Запомнить меня'))
form.append(createBtn('submit', 'Вход', 'btn-primary'))
