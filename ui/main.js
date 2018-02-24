//Counter code
let button = document.getElementById('counter');

//var counter = 0;

button.onclick = function () {
	//Create a request object
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function () {
		if (request.readyState === XMLHttpRequest.DONE) {
			//Take some action
			if (request.status === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
		//Not don yet
	};
	//Render the variable in the correct span
	//counter = counter + 1;
	
	//Make a request
	request.open('GET', 'http://127.0.0.1:80/counter', true);
	request.send(null);
};

/*console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New!!!!!!!!!!!!!!!!!!!!!! Value';

//Move theImage on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft =marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    
};
/*img.onclick = function() {
    img.style.marginLeft = '100px';
};*/
