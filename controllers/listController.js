const listModel = require("../models/listModel.js");

function getShoppingList(req, res){
  //get the entire shopping list
  //var item= req.query.db_results.rows
  var item = req.query.item;//come from the query
  var item_id = req.query.item_id;//come from the query
  //var item_id = 5;
  //var item = "apple";
  //var item;
  //var item_id;
  
  console.log("Getting the shopping list. This is the controller");
  
 listModel.getAllitems(item, item_id, function(error, results){
   console.log ("Back from the listModel.getAllitemsfunction with results:", results);
    //res.json(result.rows);
    res.json(results);
  });
}

function insertNewItem(req, res){ // results from model and pass back to server.js
  //var item = "bananas";
  //var item_id = 3;
  
  var item = req.body.item;
  console.log("Inserting new item. This is the controller");
  
  //go to model to insertNewItem function to add the new item to database.
  listModel.insertNewItem(item, function(error, results){
     console.log ("Back from the listModel.insertNewItem inserting:", results);
    res.json(results); //results are in jason
  });
}


//function deleteItem(req, res){
  //var item = ?????;
  //console.log("Deleting item. This is the controller");
  
  //go to model to deleteItemfromDb function to delete the item from database
  //listModel.deleteItemfromDb(item, function(error, results){
    //console.log ("Back from listMode.deleteItemfromDb delete:", results);
    //res.json(results);
  //});
//}

function assignCategoryToItem(req, res){
  var item_id = 1;
  var category_id = 1;
  listModel.assignCategoryToItem(item_id, category_id, function(error, results){
    res.json(results);
  })
}

module.exports = {
  getShoppingList: getShoppingList,
  insertNewItem: insertNewItem,
  assignCategoryToItem: assignCategoryToItem
};