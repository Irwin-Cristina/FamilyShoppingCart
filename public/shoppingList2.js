function loadList() {
  //updating the DOM

  console.log("Loading shopping List");
  var shoppingList =$("#shoppingList").val();
  console.log("List: " + shoppingList);
  
  $.get("/loadList", function(data) {
    console.log("Back from server with: " + data);
    
      //var shoppingList = data; //info from database
      var list=" ";
      for(shoppingList in data){
        item += "<h1>" + data[shoppingList].item  + "</h1><h2>" + data[shoppingList].item_id + "</h2";
      }
        
        document.getElementById("ulShoppingList").innerHTML = list;
        //console.log("key: %o, value: %o", key, value);
        //console.log(key+": " +data[key]);
        
         //$("#ulShoppingList").append("<li class 'center' class='link'>" + value + "<a class='list' href='#'> Delete</a></li>")
        
    //}
    
  });
}


function addItem(){
  console.log("adding item to list");
  
  //add new item to list/database
  $.post("/shopping_item", {item:item}, function(data){
    console.log("Back from server with:", data);
  })
}