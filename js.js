
alert('Hello world');

var bat_back=document.querySelector('.slider .bottom .back');
var bat_next=document.querySelector('.slider .bottom .next');

var div_fotos=document.querySelectorAll('.slider .fotos>div'); /*Получаем все фото*/
var i=0; /*Индекс массива фото*/

/*Клик по кнопке назад*/
bat_back.onclick=function()
{
div_fotos[i].className=''; // Удаляем
class i--;

if (i<0){
{
i=div_fotos.length-1;
}

div_fotos[i].className='active'; // Добавляем class active
}

/*Клик по кнопке вперед*/
bat_next.onclick=function()
{
div_fotos[i].className=''; // Удаляем class
i++;

if (i>=div_fotos.length)
{
i=0;
}

div_fotos[i].className='active'; // Добавляем class active
}