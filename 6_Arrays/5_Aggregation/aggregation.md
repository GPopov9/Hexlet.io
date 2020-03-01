arrays.js
Реализуйте и экспортируйте по умолчанию функцию calculateSum, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).

Примеры
const coll1 = [8, 9, 21, 19, 18, 22, 7];
calculateSum(coll1); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27
В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):

const coll = [];
calculateSum(coll); // null