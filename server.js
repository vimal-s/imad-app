var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
                    articleOne.date;
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

var counter = 0;
app.get('/counter', function(req, res) {
	counter = counter + 1;
	res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {		//Doubt here
    //articleName = article-one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
