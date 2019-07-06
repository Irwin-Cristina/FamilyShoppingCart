function login() {
  console.log("Logging in. . .");
  var first_name = $("#first_name").val();
  console.log("Name: " + first_name);
  
  $.get("/search", {first_name:first_name}, function(data) {
    console.log("Back from the server with:");
    console.log(data);
    
    for (var i =0; i< data.list.length; i++){
      var member = data.list[i];
      console.log(member);
      $("#h2member").append(member.first_name + " " + member.last_name);
    }
  })
}
