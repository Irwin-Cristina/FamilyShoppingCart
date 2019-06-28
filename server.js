const express = require("express");
const path = require('path');
const { Pool } = require("pg");
const PORT = process.env.PORT || 5000;
require('dotenv').config();

//database
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});
//test connection
  //var sql = "SELECT * FROM family_member";

  //pool.query(sql, function(err, result) {
      // If an error occurred...
      //if (err) {
          //console.log("Error in query: ")
          //console.log(err);
      //}

      // Log this to the console for debugging purposes.
      //console.log("Back from DB with result:");
      //console.log(result.rows);


  //});




//var app = express()
express()
  .use(express.static(path.join(__dirname, 'public'))) //make public accessible for static pages-any file accessed through the url bar
  .set('views', path.join(__dirname, 'views')) //path to views
  .set('view engine', 'ejs')//use ejs

  .get("/", function(req, res){
    console.log("Received a request from /")
    res.write("This is the root")
    res.end()
  
  })
//get interface
  .get("/home", function(req, res) {
    console.log("Received a quest from /home")
    var name = getCurrentLoggedInUserAccount()
    var email = "cristinaelissa@yahoo.com"
  
    var params = {username: name, emailAddress: email}
  
    res.render("pages/home", params)//View
    
  })
//let user log in
  .get("/getFamilyMember", getFamilyMember)


//get shopping list once logged in
  .get("/getShoppingList", getShoppingList)

 
  .listen(PORT, function(){
    console.log("The server is up and listening on", PORT);
  })


function getCurrentLoggedInUserAccount() {
   return "Cristina"
 }

function getShoppingList(req, res) {
  console.log("Getting shopping list");
  
  
}

function getFamilyMember(req, res) {
  console.log("Getting Family Member");
  
  var name =req.query.name;
  console.log("retreiving person with name:", name)
  
  getFamilyMemberFromDb(name, function(err, result){
    console.log("Back from the getFamilyMemberFromDb function with results:", result);
    
    if (err || result == null || result.length != 1){
      res.status(500).json({success:false, data: err});
    }else{
      var person = result[0];
      res.status(200).json(person);
    }
      
  });
}
function getFamilyMemberFromDb(name, callback) {
  console.log("getFamilyMemberFromDb called with name:", name);
  
  var sql = "SELECT family_member_id, first_name, last_name FROM family_member WHERE first_name=$1";
  
  var params =[name];
  
  pool.query(sql, params, function(err, result){
    if(err) {
      console.log("An error with the database occured");
      console.log(err);
      callback(err, null);
    }
    console.log("Found DB results:" + JSON.stringify(result.row));
    
    callback(null, result.rows);
  })
}