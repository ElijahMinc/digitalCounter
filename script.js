const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function digitalCounter() {
   const areaValue = textarea.value;//содержимое текстареа
   const areaLength = areaValue.length; // длина ЗНАЧЕНИЯ СОДЕРЖИМОГО textarea

   counter.innerText = areaLength;// object.innerText - позволяет управлять текстовым содержимым.
   // возможно как вывести содержимое, так и установить его.
}
const valueArea = textarea.innerText = 'Здесь 17 символов';