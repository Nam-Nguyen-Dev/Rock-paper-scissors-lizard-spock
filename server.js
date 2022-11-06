const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/RPSLS.webp') {
    fs.readFile('images/RPSLS.webp', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/webp'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/rock.png') {
    fs.readFile('images/rock.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/paper.png') {
    fs.readFile('images/paper.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/scissors.png') {
    fs.readFile('images/scissors.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    }); 
  }   
else if (page == '/images/lizard.png') {
    fs.readFile('images/lizard.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
else if (page == '/images/spock.png') {
    fs.readFile('images/spock.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    let computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random()*5)]
    console.log(computerChoice)
    let playerScore = 0
    if('choice' in params){
      if(params['choice']== 'rock' && (computerChoice == 'paper' || computerChoice == 'spock')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Lose",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'rock' && (computerChoice == 'scissors' || computerChoice == 'lizard')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Win",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'paper' && (computerChoice == 'rock' || computerChoice == 'spock')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Win",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'paper' && (computerChoice == 'scissors' || computerChoice == 'lizard')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Lose",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'scissors' && (computerChoice == 'paper' || computerChoice == 'lizard')){
        res.writeHead(200, {'Content-Type': 'application/json'});        const objToJson = {
          name: "Player1",
          status: "Win",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'scissors' && (computerChoice == 'spock' || computerChoice == 'rock')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Lose",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'lizard' && (computerChoice == 'paper' || computerChoice == 'spock')){
        res.writeHead(200, {'Content-Type': 'application/json'});        const objToJson = {
          name: "Player1",
          status: "Win",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'lizard' && (computerChoice == 'scissors' || computerChoice == 'rock')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Lose",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'spock' && (computerChoice == 'scissors' || computerChoice == 'rock')){
        res.writeHead(200, {'Content-Type': 'application/json'});        const objToJson = {
          name: "Player1",
          status: "Win",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice']== 'spock' && (computerChoice == 'paper' || computerChoice == 'lizard')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Lose",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['choice'] === computerChoice) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Player1",
          status: "Tie",
          currentScore: playerScore,
          computer: computerChoice
        }
        res.end(JSON.stringify(objToJson));
      }
    }}
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
