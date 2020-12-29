const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function digitalCounter() {
   const areaValue = textarea.value;//содержимое текстареа
   const areaLength = areaValue.length; // длина содержимого текст-ареа

   counter.innerText = areaLength;// object.innerText - позволяет управлять текстовым содержимым.
   // возможно как вывести содержимое, так и установить его.
}
// const valueArea = textarea.innerText = 'Hello world';

// console.log(valueArea);