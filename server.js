var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'vimalsingh992',
    database: 'vimalsingh992',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-1': {
        title: 'Article One',
        date: 'Feb 18,2018',
        heading: 'Article One',
        content: `  <p>
                        This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.Bingo!!!!!!
                    </p>`
    },
    'article-TWO': {
        title: 'Article Two | VIMAL',
        date: 'Feb 18,2018',
        heading: 'Article Two',
        content: `  <p>
                        This is the content for my Second article.
                    </p>
                    <p>
                        This is the content for my second article.This is the content for my second article.This is the content article.
                    </p>
                    <p>
                        This is the content for my  article.Bingo!!!!!!
                    </p>`
    },
    'article-3': {
        title: 'Article Three | Vimal',
        date: 'Feb 18,2018',
        heading: 'Article Three',
        content: `  <p>
                        This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.Bingo!!!!!!
                    </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name='viewport' content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            <style>
                
            </style>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}    //articleOne.date;
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res) {
   //make a select request
   //return a response with the results
   pool.query('SELECT * FROM test', function(err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result.rows));
       }
   });
});

var counter = 0;
app.get('/counter', function(req, res) {
	counter = counter + 1;
	res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res) {//URL: /submit-name?name=xxxxx
	//Get the name from the request
	var name = req.query.name; //To do
	
	names.push(name);
	//JSON js object notation
	res.send(JSON.stringify(names));
});


app.get('/articles/:articleName', function (req, res) {		//Doubt here
    //articleName = article-one
    pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + "'", function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            if (result.rows.length === 0) {
                res.status(404).send('Article not fnd');
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
