function login() {
  console.log("Logging in. . .");
  var first_name = $("#first_name").val();
  console.log("Name: " + first_name);
  
  $.get("/getFamilyMember", {first_name:first_name}, function(data) {
      //$.get("/getFamilyMember", {first_name:first_name}, function(data) {

    console.log("Back from the server with:" + data);
    //console.log(data);
    
   $("#h2member").html(data.first_name + " " + data.last_name);
    
  });
}
