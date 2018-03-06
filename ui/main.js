
Skip to content
This repository

    Pull requests
    Issues
    Marketplace
    Explore

    @vimal-s

1
0

    8,302

29abhisheksoni/imad-app forked from hasura/imad-app
Code
Pull requests 0
Projects 0
Wiki
Insights
imad-app/ui/main.js
8fa4245 22 hours ago
@29abhisheksoni 29abhisheksoni [imad-console] Updates ui/main.js
@29abhisheksoni
@shahidhk
64 lines (53 sloc) 1.78 KB
//var button = document.getElementById('counterr');



//function exec()
//{

//var request = new XMLHttpRequest();
//request.onreadystatechange = function() 
  //  {
    //    if (request.readyState === XMLHttpRequest.DONE) 
      //      {
        //      //Take Some Action
          //    if (request.status === 200) 
            //    { 
              //      var counter = request.responseText; 
                //    var span = document.getElementById('count');
                  //  span.innerHTML = counter.toString();
            //    } 
        //    } 
    //}; 
//request.open("GET", "http://u29abhisheksoni.imad.hasura-app.io/counter", true);
//request.send(); 
//console.log('EXECUTED');
//}


//submit username password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    
    var request = new XMLHttpRequest();
   
   request.onreadystatechange = function()
   {
       if(request.readystate === XMLHttpRequest.DONE)
       {
           if(request.status === 200)
           {
             console.log('user logged in');
             alert("logged in sucessfully");
           }
           else if (request.status === 403)
           {
             alert("username/password is incorrect");
           }
            else if (request.status === 500)
            {
              alert("something went wrong on server");
            }
          
       }
   };
   var username =  document.getElementById('username');
    var password =  document.getElementById('password');
    console.log(username);
    console.log(password);
   request.open('POST', 'https://u29abhisheksoni.imad.hasura-app.io/login', true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username, password: password}));
   
   
 };

    © 2018 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    API
    Training
    Shop
    Blog
    About

