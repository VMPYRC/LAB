window.onload = function() {
	fetch('footerbar.html')
			.then(response => response.text())
			.then(data => {
					document.getElementById('footerbar').innerHTML = data;
			})
			.catch(error => console.error('Error loading footer:', error));
};