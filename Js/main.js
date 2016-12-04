var target = document.getElementById('main');

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

var page1 = '<div class="mainPage mainPage1"><h2 class="title">Content one</h2></div>';
var page2 = '<div class="mainPage mainPage2"><h2 class="title">Content two</h2></div>';
var page3 = '<div class="mainPage mainPage3"><h2 class="title">Content three</h2></div>';


link1.addEventListener('click', function(){
	link2.classList.remove('active');
	link3.classList.remove('active');
	link1.classList.add('active');
	while(target.firstChild) {
		target.removeChild(target.firstChild);
	}
	target.insertAdjacentHTML('afterbegin', page1);
	}
);

link2.addEventListener('click', function(){
	link1.classList.remove('active');
	link3.classList.remove('active');
	link2.classList.add('active');
	while(target.firstChild) {
		target.removeChild(target.firstChild);
	}
	target.insertAdjacentHTML('afterbegin', page2);
	}
);

link3.addEventListener('click', function(){
	link1.classList.remove('active');
	link2.classList.remove('active');
	link3.classList.add('active');
	while(target.firstChild) {
		target.removeChild(target.firstChild);
	}
	target.insertAdjacentHTML('afterbegin', page3);
	}
);
