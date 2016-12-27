(function () {
	let nav = document.getElementById('headerList');
	let main = document.getElementById('main');
	let navElements = nav.childElementCount;

	fetch('http://localhost:8080/Content/content1.html').then(function (request) {
		return request.text()
	}).then((response) => {
		page1 = response;
	});
	fetch('http://localhost:8080/Content/content2.html').then(function (request) {
		return request.text()
	}).then((response) => {
		page2 = response;
	});
	fetch('http://localhost:8080/Content/content3.html').then(function (request) {
		return request.text()
	}).then((response) => {
		page3 = response;
	});

	nav.addEventListener('click', toggleContent);

	function toggleContent(e) {

		let mappedIndex = mapDataIndexToIndexNumber(e.target.dataset.index);
		for (let i = 0; i < navElements; i++) {
			nav.children[i].classList.remove('active');
		}
		e.target.classList.add('active');
		while(main.firstChild) {
			main.removeChild(main.firstChild);
		}

		console.log(e.target.dataset.index);
		if (e.target.dataset.index = 'first') {
			console.log('ceva');
		}

		// if (e.target.id = link1) {
		// 	main.insertAdjacentHTML('afterbegin', page1);
		// 	if (e.target.id = link2) {
		// 		main.insertAdjacentHTML('afterbegin', page2);
		// 		if(e.target.id = link3) {
		// 			main.insertAdjacentHTML('afterbegin', page3);
		// 		}
		// 	}
		// }

	}


	function mapDataIndexToIndexNumber(tabIndex) {
		let dataValues = constructDataValues();
		return dataValues.indexOf(tabIndex) + 1;
	}

	function constructDataValues() {
		arr = [];
		for (let i= 0; i < nav; i++) {
			arr.push(nav.children[i].dataset.index);
		}
		return arr;
	}

})();