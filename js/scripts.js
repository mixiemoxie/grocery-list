$(function(){
  var groceryList = [];
  $("button#add-item").click(function(){
    var foodItem = $("#input-field").val().toUpperCase();
    groceryList.push(foodItem);
    $("#input-field").val('');
    console.log(groceryList);
  });
  $("button#generate").click(function(){
    $("#input-area").hide();
    groceryList.sort();
    groceryList.forEach(function(listItem){
      $("#grocery-list").append("<li>" + listItem + "</li>");
    });
    $("#output-area").show();
  });
  $("button#resetList").click(function(){
    $("#output-area").hide();
    $("#input-area").show();
    groceryList.forEach(function(){
      $("#grocery-list li").closest('li').remove();
    });
    groceryList = [];

    console.log(groceryList);
    });
});
