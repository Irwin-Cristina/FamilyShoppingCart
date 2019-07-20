const memberModel = require("../models/memberModel.js");


function getFamilyMember(req, res) {
   //search?first_name=Cristina
  var first_name =req.query.first_name;
  console.log("Getting Family Member:" + first_name);

  memberModel.getFamilyMemberFromDb(first_name, function(err, result){
    console.log("Back from the getFamilyMemberFromDb function with results:", result);
    
    if (err || result == null || result.length != 1){
      res.status(500).json({success:false, data: err});
    }else{
      var person = result[0];
      res.status(200).json(person);
    }
      
  });
}





//function search(req, res){
  //console.log("Getting Family member:" + first_name);
  
  //search?first_name=Cristina
  //var first_name = req.query.first_name; //come from the query
    //console.log("Retrieving person with name:", first_name);
  
  
  //memberModel.searchByName(first_name, function(error, results){
    //console.log ("Back from the memberModel.searchByName function with results:", results);
    
    
    //if (err || results == null || results.length != 1){
     // res.status(500).json({success:false, data: err});
    //}else{
      //var person = results[0];
      //res.status(200).json(person);
    //}
  //var person = results[0];
   //res.json(results);
    //res.render('index.html', results);
  //});
  
  //var topicId;//come from query
  //scriptureModel.searchByTopic(topicId, function(error, results){
      //res.json(results);
  //});
//}
module.exports = {
  getFamilyMember: getFamilyMember
  //search: search
};