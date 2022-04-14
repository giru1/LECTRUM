/**
 * Доработать форму из 1-го задания.
 * 
 * Добавить обработчик сабмита формы.
 * 
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 * 
 * Обязательно!
 * 1. При сабмите формы страница не должна перезагружаться
 * 2. Генерировать ошибку если пользователь пытается сабмитить форму с пустыми или содержащими только пробел(ы) полями.
 * 3. Если поля формы заполнены и пользователь нажимает кнопку Вход → вывести в консоль объект следующего вида
 * {
 *  email: 'эмейл который ввёл пользователь',
 *  password: 'пароль который ввёл пользователь',
 *  remember: 'true/false'
 * }
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

email = createInputWrap('email', 'Введите свою электропочту', 'Электропочта')
password = createInputWrap('password', 'Введите пароль', 'Пароль')
checkbox = createInputWrap('checkbox', '', 'Запомнить меня')
button = createBtn('submit', 'Вход', 'btn-primary')

form.append(email)
form.append(password)
form.append(checkbox)
form.append(button)


function sendPostData() {
	if (form && form.length !== 0) {
		let email = document.getElementById('email')
		let password = document.getElementById('password')
		let checkbox = document.querySelector('#exampleCheck1');
		form.addEventListener('submit', function(event){
			event.preventDefault();
			
			console.log(email)
			const emailValue = email.value.trim();
			const passValue = password.value.trim();
			
			if(!emailValue || !passValue){
				throw new Error ('No data!');
			}
			const checkboxValue = !!checkbox.checked;
			
			const obj = {
				email: emailValue,
				password: passValue,
				remember: checkboxValue
			}
		});
	}
}

sendPostData()