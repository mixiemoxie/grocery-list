$(function(){
  var groceryList = [];
  $("button#add-item").click(function(){
    var foodItem = $("#input-field").val().toUpperCase();
    groceryList.push(foodItem);
    $("#input-field").val('');
    console.log(groceryList);
  });
  $("button#generate").click(function(){
    groceryList.sort();
    groceryList.forEach(function(listItem){
      $("#grocery-list").append("<li>" + listItem + "</li>");
    });
  });
});
