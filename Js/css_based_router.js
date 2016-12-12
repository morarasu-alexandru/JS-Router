(function () {
	let nav = document.getElementById('headerList');

	nav.addEventListener('click', toggleContent);

	function toggleContent(e) {
		let mappedIndex = mapDataIndexToIndexNumber(e.target.dataset.index);

	}

	function mapDataIndexToIndexNumber(tabIndex) {
	let dataValues = ['first', 'second', 'third', 'forth'];
	return dataValues.indexOf(tabIndex) + 1;
	}

})();