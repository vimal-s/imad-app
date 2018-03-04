//Counter code
let button = document.getElementById('counter');

//var counter = 0;


// Submit username/password to login
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
				    alert('login successfull');
				} else if (request.status === 403) {
				    alert('incorrect');
				} else if (request.status === 500) {
				    alert('server error');
				}
			}
		
		//Not done yethttp://localhost/
	};
	//Render the variable in the correct span
	//counter = counter + 1;
	
	//Make a request
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	console.log(username);
	console.log(password);
	
	request.open('POST', 'http://vimalsingh992.imad.hasura-app.io/login', true);
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(JSON.stringify({username: username, password: password}));
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
