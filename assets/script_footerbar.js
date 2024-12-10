window.onload = function() {
	fetch('footerbar.html')
			.then(response => response.text())
			.then(data => {
					document.getElementById('footerbar').innerHTML = data;
			});
};