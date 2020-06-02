Point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами, представляющими координаты на плоскости x и y.

Segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

solution.js
Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).

Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).

Примеры
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

reversedSegment.getBeginPoint(); // (11, -3)
reversedSegment.getEndPoint(); // (1, 10)

beginPoint === reversedSegment.getEndPoint() // false
endPoint === reversedSegment.getBeginPoint() // false
Подсказки
Есть разные способы организовать работу абстракции Point. Выберите тот, который считаете нужным, на основе пройденного материала.