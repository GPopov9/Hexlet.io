prettify
Реализуйте функцию prettify(), которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф. Экспортируйте функцию по умолчанию.

Примеры
// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
const elements = prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
Подсказки
Очистка строки от пробельных символов: trim
instanceof