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
		//Not done yethttp://localhost/
	};
	//Render the variable in the correct span
	//counter = counter + 1;
	
	//Make a request
	request.open('GET', 'http://vimalsingh992.imad.hasura-app.io/counter', true);
	request.send(null);
};

// Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
	//MAKE A request to the server and send the name
	
	//Create a request object
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function () {
		if (request.readyState === XMLHttpRequest.DONE) {
			//Take some action
			if (request.status === 200) {
				//Capture a list of names and render it as a list
				var names = request.responseText;
				names = JSON.parse(names);
				var list = '';
				for (var i = 0; i < names.length; i++) {
					list += '<li>' + names[i] + '</li>';
				}
				var ul = document.getElementById('namelist');
				ul.innerHTML = list;
			}
		}
		//Not done yethttp://localhost/
	};
	//Render the variable in the correct span
	//counter = counter + 1;
	
	//Make a request
	var nameInput = document.getElementById('name');
var name = nameInput.value;

	request.open('GET', 'http://vimalsingh992.imad.hasura-app.io/submit-name?name=' + name, true);
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
