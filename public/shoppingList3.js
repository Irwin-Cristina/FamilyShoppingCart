function loadList() {
  console.log("Loading shopping List");
  //var shoppingList =$("#shoppingList").val();
  //console.log("List: " + shoppingList);
  
  $.get("/loadList", function(data) {
    console.log("Back from server with: " + data);
    
      for(var i=0;i<data.item.length; i++){
        var value = data.item[i];
        console.log(value);
        
        //if($("#ulShoppingList").length>0){
         $("#ulShoppingList").append("<li class 'center' class='link'>" + value.item + "<a class='list' href='#' onclick ='parentNode.parentNode.removeChild(parentNode)'> Delete</a></li>");
         // $("#ulShoppingList").find("<li class 'center' class='link'>" + value.item + "<a class='list' href='#'> Delete</a></li>").remove();
         
       //} else {
          // $("#ulShoppingList").append("<li class 'center' class='link'>" + value.item + "<a class='list' href='#'> Delete</a></li>");
      // }
    }
    
  });
}


function addItem(){
  
  var item = $("#item").val();
  console.log("adding this item to list: " + item);
  
  //add new item to list/database
  $.post("/shopping_item", {item: item}, function(data){
    console.log("Back from server with:", data);
    
   $("#h3confirmation").html( item +  " was succesfully added "); 
    
  });
}