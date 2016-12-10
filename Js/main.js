(function() {
	let target = document.getElementById('main');
	let nav = document.getElementById('headerList');

	nav.addEventListener('click', toggleContent);

	function toggleContent(e) {
		let mappedIndex = mapDataIndexToIndexNumber(e.target.dataset.index);
		const classToRemove = 'active';
		let elements = getElements(3, 'link');
		removeActiveClassesFromAllSiblings(elements, classToRemove);

		let content = `<div class="mainPage mainPage${mappedIndex}"><h2 class="title">Content ${mappedIndex}</h2></div>`;
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
		for  (let i = 1; i < totalElements; i++ ) {
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
