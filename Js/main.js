var target = document.getElementById('main');

var  nav = document.getElementById('headerListc');
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

var page1 = '<div class="mainPage mainPage1"><h2 class="title">Content one</h2></div>';
var page2 = '<div class="mainPage mainPage2"><h2 class="title">Content two</h2></div>';
var page3 = '<div class="mainPage mainPage3"><h2 class="title">Content three</h2></div>';

nav.addEventListener('click', function(e){
	if (e.target) {
		link1.classList.remove('active');
		link2.classList.remove('active');
		link3.classList.remove('active');

		if ( e.target.matches('#link1')) {
			link1.classList.add('active');
			while(target.firstChild) {
				target.removeChild(target.firstChild);
			}
			target.insertAdjacentHTML('afterbegin', page1);
		}
		else if (e.target.matches('#link2')) {
		link2.classList.add('active');
		while(target.firstChild) {
			target.removeChild(target.firstChild);
			}
		target.insertAdjacentHTML('afterbegin', page2);
		}
		else if (e.target.matches('#link3')) {
		link3.classList.add('active');
		while(target.firstChild) {
			target.removeChild(target.firstChild);
			}
		target.insertAdjacentHTML('afterbegin', page3);
		}

	}
});