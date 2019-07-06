//connection to data base

const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log("DB URL:" + db_url);

const pool = new Pool({connectionString: db_url});

function getFamilyMemberFromDb(first_name, callback) {
  console.log("getFamilyMemberFromDb called with name:", first_name);
  
  var sql = "SELECT family_member_id, first_name, last_name FROM family_member WHERE first_name=$1";
  
  var params =[first_name];
  
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



function searchByName(first_name, callback){
  var results = {list:[{family_member_id:1, first_name:"Cristina", last_name: "Irwin"},
                {family_member_id:2, first_name:"Scott", last_name: "Irwin"},
                {family_member_id:3, first_name:"Isabella", last_name: "Irwin"},
                {family_member_id:4, first_name:"Isaac", last_name: "Irwin"},
                {family_member_id:5, first_name:"Simon", last_name: "Irwin"}]};
  //console.log("searching the database for first_name:" + first_name);
  
  //var sql = "SELECT family_member_id, first_name, last_name FROM family_member WHERE first_name=$1::text";
  
 // var params = [first_name];
  
  //pool.query(sql, params, function(err, db_results){
    //if(err) {
      //throw err;
    //}else {
      //We got some successful results fom DB
      //console.log("Back from the Db with:")
      //console.log(db_results);
      
      
      //var results = {
        //success:true,
        //list: db_results.rows
      //};

      callback(null, results);
    }
  //});
//}

function searchByCategory(category_id, callback){
  var results = {list:[{category_id:1, category_name:"Dairy"},
                {category_id:1, category_name:"Dairy"},
                {category_id:2, category_name:"Frozen Foods"},
                {category_id:3, category_name:"Meat"},
                {category_id:4, category_name:"Produce"},
                {category_id:5, category_name:"Cleaners"},
                {category_id:6, category_name:"Paper Goods"},
                {category_id:7, category_name:"Personal Care"},
                {category_id:8, category_name:"Snacks"},
                {category_id:9, category_name:"Canned Goods"},
                {category_id:10, category_name:"Baking Items"},
                {category_id:11, category_name:"Beverages"},
                {category_id:12, category_name:"Dry Food"},
                {category_id:13, category_name:"Bread/Ceral"}]};
  callback(null, results);
    }

//export functions
module.exports = {
  getFamilyMemberFromDb:getFamilyMemberFromDb,
  searchByName: searchByName,
  searchByCategory: searchByCategory
  
}
