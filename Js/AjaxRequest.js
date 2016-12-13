(function () {
	let nav = document.getElementById('headerList');
	let main = document.getElementById('main');

	let content1 =  getLocalElement('http://localhost:8080/Content/content1.html');
	let content2 =  getLocalElement('http://localhost:8080/Content/content2.html');
	let content3 =  getLocalElement('http://localhost:8080/Content/content3.html');

	function getLocalElement(path) {

		fetch(path).then(function (request) {
			return request.text()
		}).then((response) => {
			console.log (response);
			return response
		});
		return response;
	}


})();