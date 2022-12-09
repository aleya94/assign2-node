var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {

    if (req.url == "/"){
        let info = fs.readFileSync('home.html', 'utf8');
        res.end(info);
    }
    else if (req.url == "/about"){
        let info = fs.readFileSync('about.html', 'utf8');
        res.end(info);
    }

    else if (req.url == "/contact"){
        let info = fs.readFileSync('contact.html', 'utf8');
        res.end(info);
    }

    else if (req.url == "/terms"){
        let info = fs.readFileSync('terms.html', 'utf8');
        res.end(info);

    }
    
    else if (req.url == "/info"){
        let info = fs.readFileSync('info.html', 'utf8');
        res.end(info);

    }

    else if (req.url == "/stateName"){
        let info = fs.readFileSync('stateName.html', 'utf8');
        res.end(info);
    }

});

server.listen(4040);
console.log("You have successfully run the server");

