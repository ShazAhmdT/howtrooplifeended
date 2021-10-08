const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public' ));
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req,res){
	res.render('name');
	});
app.post("/" ,function(req,res){
const name = req.body.name;
const namemod = name.replace(/\s/g, '').toLowerCase();
 const usingSplit = namemod.split('');
const usingSpread = [...namemod];
const usingArrayFrom = Array.from(namemod);
const usingObjectAssign = Object.assign([], namemod);                 
function str_split(string, split_length) {
  if (split_length == null) {
    split_length = 1;
  }
  if (string == null || split_length < 1) {
    return false;
  }
  string += '';
  var chunks = [],
    pos = 0,
    len = string.length;
  while (pos < len) {
    chunks.push(string.slice(pos, pos += split_length));
  }
  return chunks;
}
function count(string){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var splitted_string = str_split(string);
    var count = 0;
    for (i = 0; i < splitted_string.length; i++) { 
        var letterPosition = alphabet.indexOf(splitted_string[i])+1;
        count = count + letterPosition;
    }
    return count;
}
var num = count(namemod);
var n = (100 + num) % 25 ;
fs.readFile(__dirname + '/public/content/data/'+n+'.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
 const x= data.indexOf(0);
 const y = data.indexOf(1) + 1;
 const namer = data.slice(0,x);
 fs.readFile(__dirname + '/public/content/img/'+namer+'.txt', 'utf8' , (err, imgsrc) => {
  if (err) {
    console.error(err)
    return
  }
  res.render('result',{imgsrc:imgsrc,para: data.slice(y,data.length),namer:namer});
})
})
			});
		app.listen(3000, function(){
			console.log("Go cinesra");
			});