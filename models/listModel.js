//connection to data base

const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log("DB URL:" + db_url);

const pool = new Pool({connectionString: db_url});

function getAllitems(item, item_id, callback){
  console.log("get entire list");
  
  //SQL statement= Select everything from shopping_items table.
  //var sql ="SELECT item_id, item FROM shopping_items";
  
  //get the query from the pool and send it back
  //pool.query(sql, function(err, db_results){
    //if(err) {
      //throw err;
      //console.log("An error with the database occured", err);
      //console.log(err);
      //callback(err, null);
      //return callback(err, null);
    //}else{
      //console.log("Back from DB with:")
      //var results = {
        //success:true, list:db_results
      //};
      //callback(null, results);
    //}
      //callback(null, result.rows);
      //result.rows.forEach(row);
    //}
    //console.log("Found DB results:" + JSON.stringify(result.row));
    //pass the result back to the listController
    //callback(null, result.rows);
 var results={success:true};
  callback(null, results);  //pass this to the controller.
  //return results
  //callback(null, result.rows);
  //callback(null, result.row);
}

function insertNewItem(item, item_id, callback){ //instert the item and item_id, the item is received from the input.
  //console.log("inserting new item into database" + item);
  
  //sql statement inserting values into the first two spots, value 1 is default, value two is from input on html page.
  //var sql="INSERT INTO shopping_items(item_id, item) VALUES($1, $2)";
  
  // if connection is made, then new item is inserted and here are the results
  var results={success:true,
              shopping_items:{item_id:1, item: item}};
  callback(null, results);  //pass this to the controller.
}

function assignCategoryToItem(item_id, category_id, callback){
  var results = {success:true};
  callback(null, results);  //pass this to the controller.
}



module.exports = {
  getAllitems: getAllitems,
  insertNewItem: insertNewItem,
  assignCategoryToItem: assignCategoryToItem
};