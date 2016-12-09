(function() {
	let target = document.getElementById('main');

	let nav = document.getElementById('headerListc');
	// let link1 = document.getElementById('link1');
	// let link2 = document.getElementById('link2');
	// let link3 = document.getElementById('link3');

	// let page1 = '<div class="mainPage mainPage1"><h2 class="title">Content one</h2></div>';
	// let page2 = '<div class="mainPage mainPage2"><h2 class="title">Content two</h2></div>';
	// let page3 = '<div class="mainPage mainPage3"><h2 class="title">Content three</h2></div>';

	nav.addEventListener('click', toggleContent);


	// function someName(e){

		// link1.classList.remove('active');
		// link2.classList.remove('active');
		// link3.classList.remove('active');

		// if ( e.target.matches('#link1')) {
		// 	link1.classList.add('active');
		// 	while(target.firstChild) {
		// 		target.removeChild(target.firstChild);
		// 	}
		// 	target.insertAdjacentHTML('afterbegin', page1);
		// }
		// else if (e.target.matches('#link2')) {
		// 	link2.classList.add('active');
		// 	while(target.firstChild) {
		// 		target.removeChild(target.firstChild);
		// 	}
		// 	target.insertAdjacentHTML('afterbegin', page2);
		// }
		// else if (e.target.matches('#link3')) {
		// 	link3.classList.add('active');
		// 	while(target.firstChild) {
		// 		target.removeChild(target.firstChild);
		// 	}
		// 	target.insertAdjacentHTML('afterbegin', page3);
		// }
	// });

	function toggleContent(e) {
		let mappedIndex = mapDataIndexToIndexNumber(e.target.dataset.index);
		const classToRemove = 'active';
		let elements = getElements(3, 'link');
		removeActiveClassesFromAllSiblings(elements, classToRemove);

		let content = `<div class="mainPage mainPage1"><h2 class="title">Content ${mappedIndex}</h2></div>`;
		let link = document.getElementById(`link${mappedIndex}`);

		link.classList.add('active');
			while(target.firstChild) {
				target.removeChild(target.firstChild);
			}
			target.insertAdjacentHTML('afterbegin', content);
	}

	function mapDataIndexToIndexNumber(tabIndex) {
		let dataValues = ['first', 'second', 'third', 'fourth'];

		return dataValues.indexOf(tabIndex) + 1;
	}

	function getElements(totalElements, idStub) {
		let arr = [];
		for  (let i = 0; i < totalElements; i++ ) {
			arr.push(document.getElementById(`${idStub}${i}`));
		}
		return arr;
	}

	function removeActiveClassesFromAllSiblings(elements, classToRemove) {
		elements.forEach(element => {
			element.classList.remove(classToRemove);
		});
	}
})();
