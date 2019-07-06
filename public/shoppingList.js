function loadList() {
  console.log("Loading shopping List");
  var shoppingList =$("#shoppingList").val();
  console.log("List: " + shoppingList);
  
  $.get("/loadList", {shoppingList: shoppingList}, function(data) {
    console.log("Back from server with: " + data);
    
    for (var i=0; i< data.list.length; i++){
      var item = data.list[i];
      console.log(item);
      $("#ulShoppingList").append("<li class 'center' class='link'>" + item.item + "<a class='list' href='#'> Delete</a></li>")
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