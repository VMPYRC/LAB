window.onload = function() {
	fetch('headerbar.html')  // Fetch the header.html file
			.then(response => response.text())  // Parse the file as text
			.then(data => {
					document.getElementById('headerbar').innerHTML = data;  // Inject the content into the headerbar div
			})
			.catch(error => console.error('Error loading header:', error));  // Handle any errors
};