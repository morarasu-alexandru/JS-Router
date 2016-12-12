(function () {
	let nav = document.getElementById('headerList');
	let main = document.getElementById('main');
	let mainElements = main.childElementCount;

	nav.addEventListener('click', toggleContent);

	function toggleContent(e) {
		let mappedIndex = mapDataIndexToIndexNumber(e.target.dataset.index);
		for (let i = 0; i < mainElements; i++) {
            main.children[i].classList.remove('visible');
		}
		main.children[mappedIndex - 1].classList += ' visible';
	}

	function mapDataIndexToIndexNumber(tabIndex) {
	let dataValues = constructDataValues();
	return dataValues.indexOf(tabIndex) + 1;
	}

	function constructDataValues() {
		arr = [];
	for (let i= 0; i < mainElements; i++) {
		arr.push(nav.children[i].dataset.index);
		}
	return arr;
	}
})();