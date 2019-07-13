function loadList() {
  console.log("Loading shopping List");
  var shoppingList =$("#shoppingList").val();
  console.log("List: " + shoppingList);
  
  $.get("/loadList", function(data) {
    console.log("Back from server with: " + data);
    
      //var shoppingList = data; //info from database
      var item=" ";
      for(let key in data){
        let value = data[key];
        console.log("key: %o, value: %o", key, value);
        //console.log(key+": " +data[key]);
        
         $("#ulShoppingList").append("<li class 'center' class='link'>" + value + "<a class='list' href='#'> Delete</a></li>")
        
    }
    
  })
}


function addItem(){
  console.log("adding item to list");
  
  //add new item to list/database
  $.post("/shopping_item", {item:item}, function(data){
    console.log("Back from server with:", data);
  })
}