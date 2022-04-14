/**
 * Доработайте функцию что бы она возвращала объект из переданного вложенного массива
 * 
 * Фукнция принимает 1 аргумента
 * 1. Массив из массивов который содержит 2 элемента — [ [ element1, element2 ] ]
 * 
 * ЗАПРЕЩЕНО ИСПОЛЬЗОВАТЬ ВСТРОЕННЫЙ МЕТОД Object.fromEntries
 * 
 * Обратите внимание!
 * 1. Генерировать ошибку если второй элемент вложенного массива не число, не строка или не null
 * 3. Если в качестве второго аргумента был передан массив вида [ [ element1, element2 ] ], то его так же нужно преобразовать в объект
 * 4. Для перебора массива можно воспользоваться циклом for..of.
*/

function errorThrow(value) {
	if (typeof(value) !== 'number' && typeof(value) !== 'string' && value !== 'null' && !Array.isArray(value)) {
		throw new Error('Value is not a number, not a string not a null!');
	}
}


const fromEntries = (entries) => {
    const obj = {};
	
	for (let [key, value] of entries) {
		
		try {
			errorThrow(value);
		} catch(error) {
			console.log(error.message);
		}
		
		obj[key] = value
		
    	if (Array.isArray(value)) {
    		const arr2 = {}
			for (let [k, val] of value) {
				arr2[k] = val
				obj[key] = arr2
			}
		}
	}
    return obj;
};

console.log(fromEntries([['name', 'John'], ['age', 35]])); // { name: 'John', age: 35 }
console.log(fromEntries([['name', 'John'], ['address', [['city', 'New  York']]]])); // { name: 'John', address: { city: 'New  York' } }

