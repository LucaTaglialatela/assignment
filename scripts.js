$(function myFunction() {  
  $("button").click(function(){
    $.get("http://localhost:3000/api/v1/orders", function(data, status){
      console.log(data);
    });
  });
});