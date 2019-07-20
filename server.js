const express = require("express");
const path = require('path');
require('dotenv').config();

const memberController = require("./controllers/memberController.js");
const listController = require("./controllers/listController.js")

//database
//const connectionString = process.env.DATABASE_URL; //in memberModel
//const { Pool } = require("pg"); //in memberModel
//const pool = new Pool({connectionString: connectionString}); //in memberModel
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

const PORT = process.env.PORT || 5000;

var app = express();
//express()
  app.use(express.static(path.join(__dirname, 'public'))); //make public accessible for static pages-any file accessed through the url bar
  app.use(express.json()); //suports json encoded bodies--middleware
  app.use(express.urlencoded({extended: true})); //support url encoded body-middleware

 // app.set('views', path.join(__dirname, 'views')); //path to views
  //app.set('view engine', 'ejs');//use ejs

  app.get("/", function(req, res){
    console.log("Received a request from /");
    //res.write("This is the root")
    //res.render('public/home.html');
    //res.end();
    res.sendFile(__dirname + '/public/home.html');
  
  });
//get interface
  //app.get("/home", function(req, res) {
    //console.log("Received a quest from /home")
    //var name = getCurrentLoggedInUserAccount()
    //var email = "cristinaelissa@yahoo.com"
  
    //var params = {username: name, emailAddress: email}
  
    //res.render("pages/home", params)//View
    
  //});

//let user log in
  //app.get("/search", memberController.search);

// user log in 2
  app.get("/getFamilyMember", memberController.getFamilyMember);

//get shopping list once logged in
  app.get("/loadList", listController.getShoppingList);

//add new item to item_shopping table using the listcontroller function insertNewItem
  app.post("/shopping_item", listController.insertNewItem);
 
//delete item frim item_shopping table using the listcontroller function deleteItem
  //app.post("/delete", listController.deleteItem);

  app.listen(PORT, function(){
  
    console.log("The server is up and listening on", PORT);
  });


/*function getCurrentLoggedInUserAccount() {
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
}*/