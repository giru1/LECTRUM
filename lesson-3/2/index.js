// Перепишите `if..else` с использованием нескольких операторов `?`. 
// Для читаемости — оформляйте код в несколько строк.

////////////////// Задание //////////////////
let message;
let login = 6456;
// if (login === 'Pitter') {
//   message = 'Hi';
// } else if (login === 'Owner') {
//   message = 'Hello';
// } else if (login === '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Решение //////////////////

message = login === 'Pitter' ? 'Hi' :
	login === 'Owner' ? 'Hello' :
	login === '' ?  'unknown' :
	'';

console.log(message)