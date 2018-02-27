$(document).ready(function() {
  $("form#choose").submit(function(event) {
    var beaches = $("select#beaches").val();
    var sunshine = $("select#sunshine").val();
    var seafood = $("select#seafood").val();
    var spanish = $("select#spanish").val();
    var money = $("select#money").val();

    if (beaches === "Yes" && sunshine === "Yes" && seafood === "Yes" && spanish === "No" && money === "Yes") {
      $("#Jamaica").show();
    } else if (beaches === "Yes" && sunshine === "Yes" && seafood === "Yes" && spanish === "Yes" && money === "No") {
        $("#Peru").show();
    } else if (beaches === "Yes" && sunshine === "Yes" && seafood === "Yes" && spanish === "Yes" && money === "Yes") {
          $("#Barcelona").show();
    } else if (beaches === "No" && sunshine === "No" && seafood === "Yes" && spanish === "No" && money === "No") {
        $("#Oregon").show();
    } else {
        $("#NoVacation").show();
    }

    event.preventDefault();
 });
});
