
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

let absolutePath = __dirname + "/views/index.html"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req.method + ' ' +  req.path + ' - ' + req.ip);
  next();
});
app.use(express.static(__dirname + "/public"));

console.log("Hello World");
app.get("/json",(req, res)=> res.json({"message": process.env.MESSAGE_STYLE === "uppercase"?"Hello json".toUpperCase():"Hello json"}));
app.get("/",(req, res)=>res.sendFile(absolutePath));
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time})
})
app.get("/:word/echo",(req, res)=>res.send({echo:req.params.word}));
app.get("/name",(req, res)=>{
  const {first: firstName, last: lastName} = req.query;
  res.send({name: `${firstName} ${lastName}`});
});
app.post("/name",(req, res)=>{
  const {first: firstName, last: lastName} = req.body;
  res.send({name: `${firstName} ${lastName}`});
});

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
