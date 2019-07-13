//connection to data base

const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log("DB URL:" + db_url);

const pool = new Pool({connectionString: db_url});

function getAllitems(item, item_id, callback){
  //console.log("get entire list. This is the model with data from controller. " + "item =" + rows.item[0] + " and item_id=" + rows.item_id[0]);
  
    console.log("get entire list.");

  
  //SQL statement= Select everything from shopping_items table.

 var sql ="SELECT item_id, item FROM shopping_items";
  //var params=[item, item_id];
  
  //get the query from the pool and send it back
  pool.query(sql, function(err, db_results){
    if(err) {
      throw err;
    }else{
     console.log("Back from DB with:")
      console.log(db_results);
  
      var results={
      success:true, 
      item: db_results.rows
      };  //pass this to the controller.
  
      // var results ={success: true,
                     //list:[{item_id:1, item:"lemon"},
                    //{item_id:2, item:"paper"},
                    //{item_id:3, item:"milk"}]};
      callback(null, results);
  
   } 
  });
}

function insertNewItem(item, item_id, callback){ //instert the item and item_id, the item is received from the input.
  console.log("inserting new item into database" + item);
  
  //sql statement inserting values into the first two spots, value 1 is default, value two is from input on html page.
  var sql="INSERT INTO shopping_items(item) VALUES('" + item + "')";
  console.log(sql);
  pool.query(sql, function(err, results){
    if(err){
      console.log('an errror occured with the database');
      console.log(err);
      callback(err, null);
    } else {
      // if connection is made, then new item is inserted and here are the results
      console.log("Row inserted");
      var results={success:true,
              shopping_items:{item_id:1, item: banana}};
      callback(null, results);  //pass this to the controller.
    }
  });
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