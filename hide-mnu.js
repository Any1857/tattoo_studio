


/*
var bat_back=document.querySelector('.slider .bottom .back');
var bat_next=document.querySelector('.slider .bottom .next');
var div_fotos=document.querySelectorAll('.slider .fotos>div');
var i=0;


bat_back.onclick=function() {
	
	div_fotos[i].className='';
	i--;
	
	if (i<0) {
		i=div_fotos.length-1;
	}
	div_fotos[i].className='active';
}

bat_next.onclick=function() {
	div_fotos[i].className='';
	i++;
	
	if (i>=div_fotos.length) {
		i=0;
	}
	div_fotos[i].className='active';
}
*/

var image1 = ['app/img/photo/img-6.jpg','app/img/photo/img-0.jpg', 'app/img/photo/img-1.jpg', 'app/img/photo/img-2.jpg', 'app/img/photo/img-3.jpg', 'app/img/photo/img-4.jpg', 'app/img/photo/img-5.jpg'];
var num1 = [0];

function next() {
	let slider1=document.getElementById('slider1');
	num1++;

	if(num1>=image1.length) {
		num1=[0];
	}
	slider1.src = image1[num1];
}

function prev() {
	let slider1 = document.getElementById('slider1');
	num1--;
	if(num1<0) {
		num1 = image1.length-1;
	}

	slider1.src = image1[num1];
}


var image2 = ['app/img/photo/img-0.jpg', 'app/img/photo/img-1.jpg', 'app/img/photo/img-2.jpg', 'app/img/photo/img-3.jpg', 'app/img/photo/img-4.jpg', 'app/img/photo/img-5.jpg', 'app/img/photo/img-6.jpg'];
var num2 = [0];

function next1() {
	let slider2=document.getElementById('slider2');
	num2++;

	if(num2>=image2.length) {
		num2=[0];
	}
	slider2.src = image2[num2];
}

function prev1() {
	let slider2 = document.getElementById('slider2');
	num2--;
	if(num2<0) {
		num2 = image2.length-1;
	}

	slider2.src = image2[num2];
}



var image3 = ['app/img/photo/img-1.jpg', 'app/img/photo/img-2.jpg', 'app/img/photo/img-3.jpg', 'app/img/photo/img-4.jpg', 'app/img/photo/img-5.jpg','app/img/photo/img-6.jpg','app/img/photo/img-0.jpg'];
var num3 = [0];

function next2() {
	let slider3=document.getElementById('slider3');
	num3++;

	if(num3>=image3.length) {
		num3=[0];
	}
	slider3.src = image3[num3];
}

function prev2() {
	let slider3 = document.getElementById('slider3');
	num3--;
	if(num3<0) {
		num3 = image3.length-1;
	}

	slider3.src = image3[num3];
}




/*function slidePrev() {
	var click = document.getElementById('photo-button');
	var flow = document.getElementById('slider2');

	click.onclick = function() {
		flow.style.filter = 'saturate(100%)';
		flow.style.marginLeft = '50px';
		flow.style.height = '500px';
	}
};*/






window.onload = function showSub(){
	let timer;
	let timer1;
	let timer2;
	let el = document.getElementById('fox');
	let on = document.getElementById('flo');
	let on1 = document.getElementById('flo1');
	let on2 = document.getElementById('flo2');
	

	el.onmouseover = function(){
		var timer = setTimeout(function(){
			on.style.opacity = '1';
			on.style.transition = 'all .9s ease';
			on.style.marginLeft = '45%';
		}, 300);
		var timer = setTimeout(function(){
			on1.style.opacity = '1';
			on1.style.transition = 'all .9s ease';
			on1.style.marginLeft = '45%';
		}, 600);
		var timer = setTimeout(function(){
			on2.style.opacity = '1';
			on2.style.transition = 'all .9s ease';
			on2.style.marginLeft = '45%';
		}, 900);
	}
};